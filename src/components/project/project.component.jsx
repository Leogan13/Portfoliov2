import React from 'react';
import './project.styles.scss';
import project1 from '../../assets/clothing_1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faSass, faStripe} from '@fortawesome/free-brands-svg-icons'
import CustomButton from '../button/button.component';

const Project = ({imageUrl, title, description, tech, demo, code}) =>(

    <div className='project-container'>
       <div className='project-img'>
            <div className='overlap-img'>
                <a href="www.google.com"><img src={project1} alt="image2"/></a>
            </div>
            <div className='overlap-img'>
                <a href="www.google.com"><img src={project1} alt="image2"/></a>
            </div>
       </div>
       <div className='project-content'>
           <div className='project-content-info'>
                <h2 className='project-title'>{title}</h2>
                <p className='project-description'>{description}</p>
           </div>
           <div className='project-tech'>
               <ul className='tech-list'>
                   <li className='tech-list-item'>
                       <span className='tech-list-icon'> 
                            <FontAwesomeIcon icon={faReact} ></FontAwesomeIcon>
                       </span>
                       React.js
                   </li>
                   <li className='tech-list-item'>
                        <span className='tech-list-icon'>
                            <FontAwesomeIcon icon={faStripe} ></FontAwesomeIcon>
                        </span>
                        Stripe
                   </li>
                   <li className='tech-list-item'>
                        <span className='tech-list-icon'>
                            <FontAwesomeIcon icon={faSass} ></FontAwesomeIcon>
                        </span>
                        Sass
                   </li>
               </ul>
           </div>
           <div className='porject-buttons'>
                <CustomButton source={demo}>View Demo</CustomButton>
                <CustomButton source={code}>View Code</CustomButton>
           </div>
           <div>

           </div>
       </div>
    </div>
)



export default Project;