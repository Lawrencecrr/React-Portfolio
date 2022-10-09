import React from 'react'
import './styles/Section.scss'
import me2 from './assets/ProfilePic.jpg'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={me2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Lawrence</h1>
                    <p>3 Months experience</p>
                    <p>Front End Developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section
