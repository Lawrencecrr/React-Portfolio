import React from 'react'
import Paw from './assets/PawFinder.png'
import Portf from './assets/FirstPortfolio.png'
import ToDo from './assets/ToDoList.png'
import wd2 from './assets/wd2.jpg'
import wd3 from './assets/wd3.jpg'
import wd4 from './assets/wd4.jpg'
import './styles/Works.scss'

const Works = () => {
    return (
        <div className='works'>
            <div className="work__section">


                <div className="cards">
                    <img src={Paw} alt="" />
                    <a href='https://find-my-pets.herokuapp.com/login'><button>See Work</button></a>
                </div>

                <div className="cards">
                    <img src={Portf} alt="" />
                    <a href='https://lawrencecrr.github.io/about-me-repo/'><button>See Work</button></a>
                </div>

                <div className="cards">
                   <img src={ToDo} alt="" />
                    <a href='https://mersant.github.io/studious-dollop/'><button>See Work</button></a>
                </div>

                <div className="cards">
                   <img src={wd2} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd3} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd4} alt="" />
                    <button>See Work</button>
                </div>

            </div>
        </div>
    )
}

export default Works
