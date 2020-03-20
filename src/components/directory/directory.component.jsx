import React from 'react';

import './directory.styles.scss'
import Project from '../project/project.component';
import clothing_1 from '../../assets/clothing_1.png';
import clothing_2 from '../../assets/clothing_2.png';
import smart_1 from '../../assets/smart_1.png';
import smart_2 from '../../assets/smart_2.PNG';
import postgresql from '../../assets/postgresql.svg';
import {faReact, faSass, faStripe, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import firebase from '../../assets/firebase_2.svg';

class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'Crwn-clothing',
            imageUrl: [clothing_1, clothing_2],
            id: 1,
            description: 'E-commerce web app that simulates a clothing store. It has an easy to use shopping cart, implements stripe for payments and firebase for the backend.',
            tech: [{techName:"React.js", techIcon:faReact},{techName:"Sass", techIcon:faSass}, {techName:"Stripe", techIcon:faStripe}],
            demo: "https://ecommerce-clothing1.herokuapp.com/",
            code: "https://github.com/Leogan13/Ecommerce-project",
            special:[{techName:"Firebase", techIcon:firebase}]
            

          },
          {
            title: 'Smart-brain',
            imageUrl: [smart_1, smart_2],
            id: 2,  
            description: 'Web App that implements the clarifai API to recognize faces in an image, the server was built with node and express while postgreSQL was used for storage and administration of the users.',
            tech: [{techName:"React.js", techIcon:faReact},{techName:"Node.js", techIcon:faNodeJs},],
            demo: "http://smart-smart-brain.herokuapp.com",
            code: "https://github.com/Leogan13/Smart-brain",
            special:[{techName:"Postgresql", techIcon:postgresql}]
          
          }
        ]
      };
    }

    render(){
        return(
            <div className='project-section'>
                <div className='project-title-holder'>
                    <h2 className='project-title-section'>Projects</h2>
                </div>
                
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                  <Project key={id} {...otherSectionProps} />
                ))}
                
            </div>
        )
        
    }
}


export default Directory;