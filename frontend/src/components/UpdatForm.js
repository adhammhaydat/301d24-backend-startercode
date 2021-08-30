import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export class UpdatForm extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleUpdat}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>strDrink</Form.Label>
                <Form.Control type="text" name="strDrink" Value={this.props.modalInfo.strDrink} />

                <Form.Label>strDrinkThumb</Form.Label>
                <Form.Control type="text" name="strDrinkThumb" Value={this.props.modalInfo.strDrinkThumb} />

                <Form.Label>idDrink</Form.Label>
                <Form.Control type="text" name="idDrink"  Value={this.props.modalInfo.idDrink}/>
              </Form.Group>
              <Button type='submit'>submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdatForm;
