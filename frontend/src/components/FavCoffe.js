import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Card, Button,Col } from "react-bootstrap";
import UpdatForm from "./UpdatForm";

export class FavCoffe extends Component {
  constructor() {
    super();
    this.state = {
      favData: [],
      show: false,
      idx: 0,
      modalInfo: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/fav-list`)
      .then((result) => {
        this.setState({
          favData: result.data,
        });
      });
  }
  handeldeleteFav = (idx) => {
    let id = this.state.favData[idx]._id;
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`);
  };
  handelShow = (idx) => {
    this.setState({
      show: true,
      idx: idx,
      modalInfo: this.state.favData[idx],
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
 handleUpdat=(e)=>{
 
 let data={
  strDrink:e.target.strDrink.value,strDrinkThumb:e.target.strDrinkThumb.value,idDrink:e.target.strDrinkThumb.value,
 }
 let id=this.state.favData[this.state.idx]._id;
 axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`,data).then(result=>{
   this.setState({
     favData:result.data
   })
 })
 } 
  render() {
    return (
      <div>

<Container>
                <Row>
        {this.state.favData.length > 0 &&
          this.state.favData.map((item, idx) => {
            return (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{item.strDrink}</Card.Title>
                      <Card.Text>{item.idDrink}</Card.Text>
                      <Button
                        variant="danger"
                        onClick={(e) => {
                          this.handeldeleteFav(idx);
                        }}
                      >
                        delete
                      </Button>
                      <Button
                        variant="danger"
                        onClick={(e) => {
                          this.handelShow(idx);
                        }}
                      >
                        update
                      </Button>
                    </Card.Body>
                  </Card>
                  </Col>
            );
          })}
          </Row>
              </Container>
        {this.state.show && (
          <UpdatForm
            show={this.state.show}
            handleClose={this.handleClose}
            modalInfo={this.state.modalInfo}
            handleUpdat={this.handleUpdat}
          />
        )}
      </div>
    );
  }
}

export default FavCoffe;
