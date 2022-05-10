import React, { Component } from 'react'
import { Navbar, Nav, NavDropdownProps, Container, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container fluid className='mx-4'>
        <Navbar.Brand href="App">ShowKaze</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className="me-auto">
          <Nav.Link href="#Link1">Home</Nav.Link>
          <Nav.Link href="#Link2">About</Nav.Link>
          <Nav.Link href="#Link3">Blog</Nav.Link>			
        </Nav>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Enter state"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
        </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
