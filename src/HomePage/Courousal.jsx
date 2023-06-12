import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Courousal() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div  className='carouselEntry'>  
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" className='carousel'>
      <Carousel.Item className='carouselitem'>
        <img
          width={1500} height={600}
          src="./images/AB6I1043.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1500} height={600}
          src="./images/F29A9495.jpg"
          alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1500} height={600}
          src="./images/AB6I1055.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Courousal