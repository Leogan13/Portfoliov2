import React from 'react';

import './button.styles.scss';


const CustomButton = ({children, source, big}) => (

    <a href={source} target="_blank" rel="noopener noreferrer" className={`${big ? 'big-button' : ''} custom-button`}>
        {children}
    </a>
)



export default CustomButton;