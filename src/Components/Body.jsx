import React from 'react';
import { Container } from 'react-bootstrap';
import Client from './Client';

const Body = (props) => {
  const clients = props.clients
  const input = props.input
  return (
    <Container className="d-flex flex-wrap justify-content-even" style={{ margin: '90px' }}>
        {
            clients.filter(client => client.name.toLowerCase().includes(input.toLowerCase())).map(client => (
                <Client className = "component" style={{ padding: '20px' }} name = {client.name} interest = {client.interest} amount = {client.amount} date = {client.date}/>
            ))
        }
    </Container>
  );
};

export default Body;
