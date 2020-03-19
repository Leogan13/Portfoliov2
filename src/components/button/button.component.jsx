import React from 'react';

import './button.styles.scss';


const CustomButton = ({children, source}) => (

    <a href={source} target="_blank" rel="noopener noreferrer" className='custom-button'>
        {children}
    </a>
)




export default CustomButton;