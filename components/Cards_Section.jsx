// This file will represent the section where the cards are displayed
// and our fetch request will be made in this file to load our
// backgrounds, location, artists names, and event dates to each card component

// import react
import React, {Component} from 'react';
// import { useEffect, useState } from 'react';
// import react-bootstrap and necessary grid components
import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import our card component class from './Card_Item.jsx'
import CardItem from './Card_Item';

// export default function CardsSection(props) {
  //   passdown input prop from search bar
  // const [imgType, setImgType] = useState('');
  // const [input, setInput] = useState('');
  // const [location, setLocation] = useState('');

  // the endpoint value will be the input value of the search field that will update onChange
class CardsSection extends Component{
  constructor(props) {
    super(props);

    this.state = this.props;
  };

  render() {
    console.log("THIS IS STATE: ", this.state);
    // const cardItem = []
    // const cardItem2 = []
      // for (let i = 0, j = 4; i < 4; i++, j++) {
      //   console.log('this.state', this.state.events)
      //   cardItem.push(<Col><CardItem key={i} ></CardItem></Col>)
      //   cardItem2.push(<Col><CardItem key={j} ></CardItem></Col>)
      // }
      let cards = []
      for(let i = 0; i < 2; i++){
        const col = [];
        for(let j = 0; j < 4; j++){
          col.push(<CardItem key={j} title={this.state.events[j].title}/>);
        }
        cards.push(<Col>{col}</Col>);
      }
    
    return (
      <Container className='d-flex justify-content-center text-center px-0 pt-4'>
        <Row className=' d-flex justify-content-center text-center'>
          {cards[0]}
        </Row>
        <Row className=' d-flex justify-content-center text-center'>
          {cards[1]}
        </Row>
      </Container>
    );
   }
    
  }
  

export default CardsSection;
