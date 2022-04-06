import React from 'react'
import './portfolio.css'
import realestate from '../../assets/real_estate.png'
import Ecommerce from '../../assets/e-commerce.png'
import training from '../../assets/education.png'
import social from '../../assets/social_clone.png'
import admin from '../../assets/admin.png'
import expense from '../../assets/expense.png'



function Portfolio() {
  const data = [
    {
      id: 1,
      image: realestate,
      title: "Real Estate App",
      github: "https://github.com/olaoyetijani/realestateapp",
      demo: "https://realestateapp-delta.vercel.app/"
    },
    {
      id: 2,
      image: Ecommerce,
      title: "E-commerce Website App",
      github: "https://github.com/olaoyetijani/e-commerceApp",
      demo: "https://e-commerce-app-nu.vercel.app/"
    },
    {
      id: 3,
      image: training,
      title: "Education Website",
      github: "https://github.com/olaoyetijani/educationwebsite",
      demo: "https://educationwebsite.vercel.app/"
    },
    {
      id: 4,
      image: social,
      title: "Meet Social",
      github: "https://github.com/olaoyetijani/meetsocialapp",
      demo: "https://meetsocialapp.vercel.app/"
    },
    {
      id: 5,
      image: admin,
      title: "Admin Dashboard UI",
      github: "https://github.com/olaoyetijani/AdminDashboard",
      demo: "https://admin-dashboard-puce.vercel.app/"
    },
    {
      id: 6,
      image: expense,
      title: "Expense App Tracker",
      github: "https://github.com/olaoyetijani/expenseApp",
      demo: "https://expense-app-lovat.vercel.app/"
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">

        {
          data.map(({id, image, title, github, demo }) => {
            return (
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target="_blank">Github</a>
                      <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                  </article>
            )
          })
        
        }

      </div>
    </section>
  )
}

export default Portfolio