// This file is where our card_Item component will be built
// import React
import React, {Component} from 'react';
// import react-bootstrap and bs-components for building the cards
import { Card, Button } from 'react-bootstrap';
// class CardsSection extends Component
class CardItem extends Component {
  constructor(props) {
    super(props)
  }
  // pass prop from navbar input field to here then intitiate get request to retrieve data for individual cards
  // setup loop to add artist name to each card rendered differently
  // create loop to add date
  // create loop to add city location
  // create loop to add price
render() { 
  console.log(this.props.imageURL);
  return (
    <Card style={{ width: '18rem' }} className='my-3 mx-0 px-0'> 
      <Card.Img
        variant='top'
        src={this.props.imageURL}
        style={{height: '8rem'}}
      />
      <Card.Body>
        <Card.Title>{this.props.artist}</Card.Title>
        <Card.Text>
           City:{this.props.city}
           Date:{this.props.date}
           {/* <p className='cards-text'>Tickets: </p> */}
           {/* <p className='cards-text'>Date: </p> */}
        </Card.Text>
        <Button>Tickets</Button>
      </Card.Body>
    </Card>
  );
  }
}


export default CardItem;

