import React from 'react';
import CustomButton from '../button/button.component';
import './contact-info.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ContactInfo = ({social}) =>(
        <div className='site-contact-inner'>
            <div className='site-contact-container'>
                <div className='site-contact-info'>
                    <div className='site-contact-styles'>
                        <h2 className='site-contact-title'>Let's Work Together</h2>
                        <p className='site-contact-text'>Have a project in mind?</p>
                    </div>
                    <CustomButton>Hit me Up</CustomButton>
                </div>
                <div className='site-contact-social'>
                    <ul className="tech-list">
                        {social.map((item) => (
                            <li className='tech-list-item'>
                                <span className='tech-list-icon'> 
                                    <FontAwesomeIcon icon={item.socialIcon} style={{fontSize:"28px"}}></FontAwesomeIcon>
                                </span>
                                <a href={item.socialLink} target="_blank" rel="noopener noreferrer" >{item.socialName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>       
)



export default ContactInfo;
