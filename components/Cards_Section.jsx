// This file will represent the section where the cards are displayed
// and our fetch request will be made in this file to load our
// backgrounds, location, artists names, and event dates to each card component

// import react
import React from 'react';
import { useEffect, useState } from 'react';
// import react-bootstrap and necessary grid components
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import our card component class from './Card_Item.jsx'
import CardItem from './Card_Item';

export default function CardsSection(props) {
  //   passdown input prop from search bar

  //    const fetchData = fetch('https://jsonplaceholder.typicode.com/photos/1')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  //     console.log(fetchData.url)

  return (
    <Container className='d-flex justify-content-center text-center px-0 pt-4'>
      <Row className=' d-flex justify-content-center'>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
        <Col>
          <CardItem />
        </Col>
      </Row>
    </Container>
  );
}
