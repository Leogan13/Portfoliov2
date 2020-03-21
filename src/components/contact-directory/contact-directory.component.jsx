import React from 'react';

import './contact-directory.styles.scss';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import ContactInfo from '../contact-info/contact-info.component';
import{faEnvelope} from '@fortawesome/free-solid-svg-icons';


class ContactDirectory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        social: [
          { id: 1,
            socialName: "leogan1399@gmail.com",
            socialIcon: faEnvelope,
            socialLink: "mailto:leogan1399@gmail.com"

                
          },
          {
            id:2,
            socialName: "On Github",
            socialIcon: faGithub,
            socialLink: "https://github.com/Leogan13"

          },
          {
            id:3,
            socialName: "On Linkedin",
            socialIcon: faLinkedin,
            socialLink: "https://www.linkedin.com/in/leonel-garcia-acosta/"
          }  
        ]
      };
   
    }

    render(){
        return(
            <div className='site-contact'>
                  <ContactInfo social={this.state.social} />
            </div>
        )
        
    }
}


export default ContactDirectory;