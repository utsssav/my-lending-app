import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react"
import Form from 'react-bootstrap/Form';

function NewClient(props) {
  const handleNewClient = (event)=>{
    event.preventDefault();
    props.addNewClient(event.target)
  }
  return (
     <Modal show={props.show} centered>
        <Modal.Header closeButton onClick={() => props.exitNew()}>
          <Modal.Title>Add New Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleNewClient}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="interest">
              <Form.Label>Interest</Form.Label>
              <Form.Control type="number" placeholder="Enter Interest" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
            
           </Form>
        </Modal.Body>
      </Modal>
  );
}

export default NewClient;