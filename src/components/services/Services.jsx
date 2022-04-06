import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Modifying the functional front-end code as well as the back-end code.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Implemented access database in which a client would input data into,</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Fields to store entries into a database.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Communicated and worked with clients to discuss and determine requirements.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>And to implement software solutions that fit their business needs.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Assisting the Senior Developer with the design, development,</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Deployment and maintenance of all menu maintenance.</p>
            </li>

          </ul>
        </article>
        { /* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Standardized all output with responsive, interactive, and strategy.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Gathering the software requirements from clients and end users.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Built an Expense App Tracker Using Firebase Authentication.</p>
            </li>
            
            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Administration UI Dashboard that provides management tasks.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Built an E-commerce website app using commerce JS with payment function.</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Real Estate App that uses bayut api to query real estate in UAE</p>
            </li>

            <li>
              <BiCheck  className='service__list-icons'/>
              <p>Assessed UX and UI designs for technical feasibility.</p>
            </li>
      
          </ul>
        </article>

        {/* END OF  */}


      </div>
    </section>
  )
}

export default Services