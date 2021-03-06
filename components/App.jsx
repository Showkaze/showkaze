import React from 'react'
import NavigationBar from './Navbar'
import Footer from './Footer'
import CardsSection from './Cards_Section'
import Carousel from './Carousel'
import CarouselSection from './Carousel'
import styles from '../client/index.css'

export default function App(props) {
  return (
    <div className='bg-dark'>
        <NavigationBar />
         <CarouselSection  />
          <CardsSection events={props.events}/>
        <Footer />
    </div>
  )
}

