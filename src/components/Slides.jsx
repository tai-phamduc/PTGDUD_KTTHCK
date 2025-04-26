import React from 'react'
import { Carousel } from 'react-bootstrap';


export default function Slides() {
  return (
    <div>
        <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://iuh.edu.vn/Resource/Upload2/Image/2025/03/banner%20web%20iuh%20-%20vr%20tour.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://iuh.edu.vn/Resource/Upload2/Image/2025/03/banner_iuh2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://iuh.edu.vn/Resource/Upload2/Image/2025/02/BANNER%20FB_WEB-01%20(1).jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
