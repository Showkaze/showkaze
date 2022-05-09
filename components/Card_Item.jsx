// This file is where our card_Item component will be built
// import React
import React from 'react';
// import react-bootstrap and bs-components for building the cards
import { Card, Button } from 'react-bootstrap';

export default function CardItem() {
  // pass prop from navbar input field to here then intitiate get request to retrieve data for individual cards
  // setup loop to add artist name to each card rendered differently
  // create loop to add date
  // create loop to add city location
  // create loop to add price
  return (
    <Card style={{ width: '18rem' }} className='my-3 mx-0 px-0'> 
      <Card.Img
        variant='top'
        src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
        style={{height: '8rem'}}
      />
      <Card.Body>
        <Card.Title>Artist Name</Card.Title>
        <Card.Text>
           <p className='cards-text'>Location: </p>
           <p className='cards-text'>Tickets: </p>
           <p className='cards-text'>Date: </p>
        </Card.Text>
        <Button>Tickets</Button>
      </Card.Body>
    </Card>
  );
}
