import React from 'react';

import './banner.styles.scss';


const Banner = () =>(

    <div className='site-banner'>
        <div className='site-banner-inner'>
            <div className='site-banner-content'>
                <h1 className='site-banner-title'>Hello, I'm Leo.</h1>
                <h2 className='site-banner-subtitle'>Web developer from Panama, I love building things. I consider myself someone that is always learning, you can call me a “forever student”.</h2>
            </div>
            <figure className= 'overlap-img'>
               <img src="https://figment-hosting.co.uk/wp-content/uploads/2015/08/avatar-1-300x300.png" alt="imaged"/>
            </figure>
        </div>
       
    </div>
)



export default Banner;






