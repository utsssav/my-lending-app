import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from "react"

function Header(props) {
  const updateSearch  = (event)=>{
    props.onSearch(event.target.value)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#" >My Lending App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto my-2 my-lg-0">
            <Form.Control
              type="text"
              placeholder="Client Name"
              className="me-2"
              aria-label="Search"
              onChange={updateSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button  className="" variant="success" onClick={()=>props.addClick()}>+ ADD New Client</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;