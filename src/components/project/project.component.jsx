import React from 'react';
import './project.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CustomButton from '../button/button.component';


const Project = ({imageUrl, title, description, tech, demo, code, special}) =>(

    <div className='project-container'>
       <div className='project-img'>
           {
               imageUrl.map((image) => (
                <div className='overlap-img'>
                    <a href={demo} target="_blank" rel="noopener noreferrer"><img src={image} alt="image2"/></a>
                </div>
               ))
           }
       </div>
       <div className='project-content'>
           <div className='project-content-info'>
                <h2 className='project-title'>{title}</h2>
                <p className='project-description'>{description}</p>
           </div>
           <div className='project-tech'>
                <ul className="tech-list">
                    {tech.map((technology) => (
                        <li className='tech-list-item'>
                            <span className='tech-list-icon'> 
                                <FontAwesomeIcon icon={technology.techIcon} style={{fontSize:"24px"}}></FontAwesomeIcon>
                            </span>
                            {technology.techName}
                        </li>
                    ))}
                </ul>  
                <ul className="tech-list">
                    {special.map((technology) => (
                        <li className='tech-list-item'>
                            <span className='tech-list-icon'> 
                                <img src={technology.techIcon} alt="hello" className='filter-color'/>
                            </span>
                            {technology.techName}
                        </li>
                    ))}
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