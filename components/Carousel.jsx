import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

export default function CarouselSection() {
  return (
    <Carousel fade className='h-auto' variant='dark'>
      <Carousel.Item interval={750} className='custom-carousel-item'>
        <img 
          className='d-block w-100 custom-carousel-img'
          src='https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg'
          alt='concert_img-1'
        />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={750} className='custom-carousel-item'>
        <img
          className='d-block w-100 custom-carousel-img'
          src='https://www.eqgroup.com/wp-content/uploads/2016/10/lil-wayne.jpg'
          alt='concert_img-2'
        />
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={750} className='custom-carousel-item'>
        <img
          className='d-block w-100 custom-carousel-img'
          src='https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/10/shutterstock_1488792806.jpg'
          alt='concert_img-3'
        />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
