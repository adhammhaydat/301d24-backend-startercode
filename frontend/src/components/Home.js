
import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Card ,Button} from "react-bootstrap";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/retreive`)
      .then((result) => {
        this.setState({
          allData: result.data.drinks,
        });
      });
  }
handelAddFav=(idx)=>{
  let data={
    strDrink:this.state.allData[idx].strDrink,
        strDrinkThumb:this.state.allData[idx].strDrinkThumb,
        idDrink:this.state.allData[idx].idDrink
  }
axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`,data).then(result=>{
  console.log(result.data)
})

}  
  render() {
    return (

      <div>
        {this.state.allData.length>0 && this.state.allData.map((item,idx)=>{
          return (<Container>
            <Row>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{item.strDrink}</Card.Title>
                  <Card.Text>
                    {item.idDrink}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>{this.handelAddFav(idx)}}>Add to favorite</Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>)
        })}
        
      </div>
    );
  }
}

export default Home;
