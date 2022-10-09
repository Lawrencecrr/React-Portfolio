import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import me from './assets/ProfilePic.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Lawrence Carr</h1>
                            <p>Front End Web Developer</p>

                            <div className="icons">
                                <a><Twitter className='icon'/></a>
                                <a><Instagram className='icon'/></a>
                                <a><Facebook className='icon'/></a>
                                <a href='https://www.linkedin.com/in/lawrence-carr-44644b251/'><LinkedIn className='icon'/></a>
                                <a><Pinterest className='icon'/></a>
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        <button>Resume</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={me} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
