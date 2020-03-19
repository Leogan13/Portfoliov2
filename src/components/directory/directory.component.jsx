import React from 'react';

import './directory.styles.scss'
import Project from '../project/project.component';
import Project1 from '../../assets/clothing_1.png';


class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'Crwn-clothing',
            imageUrl: Project1,
            id: 1,
            description: 'E-commerce web app that simulates a clothing store. It has an easy to use shopping cart, implements stripe for payments and firebase for the backend.',
            tech: ["Html","Css", "Sass", "Javascript","React", "Redux", "Firebase"],
            demo: "https://ecommerce-clothing1.herokuapp.com/",
            code: "https://github.com/Leogan13/Ecommerce-project"
          },
          {
            title: 'Smart-brain',
            imageUrl: Project1,
            id: 2,  
            description: 'Web App that implements the clarifai API to recognize faces in an image, the server was built with node and express while postgreSQL was used for storage and administration of the users.',
            tech: ["Html","Css","Javascript", "React","Node.js","Express.js", "PostgreSQL",],
            demo: "http://smart-smart-brain.herokuapp.com",
            code: "https://github.com/Leogan13/Smart-brain"
          },
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