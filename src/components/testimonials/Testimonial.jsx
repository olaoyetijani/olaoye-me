import React from 'react'
import './testimonial.css'
import toheeb from'../../assets/toheeb.jpg'
import mubaraq from'../../assets/mubaraq.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonial() {
  const data = [
    {
      avatar: toheeb,
      name: "Ibraheem Toheeb",
      review: `70% of my contracts come from client that visited my website, 
      thank you @Olaoye for making it so easy to get awesome clients online.`,
    },

    {
      avatar: mubaraq,
      name: "Olatunde Mubaraq",
      review: `Love it!! At first I thought the hype about having a website was too
      much and it couldn't be that great and then my friend told me to tried it at least
       and I just love it!.`,
    },

  ]

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}         
      >
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Feedbacks from clients"/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial