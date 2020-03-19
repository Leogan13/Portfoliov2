import React from 'react';

import './header.styles.scss'

const Header = () => (
    <header className='site-header'>
        <div className='site-header-inner'>
             <div>
                <a href="https://www.google.com/?gws_rd=ssl" className='site-logo'>Leo</a>
            </div>
            <div className="site-header-section" >
                <nav className='site-menu'>
                    <ul className='site-menu-inner'>
                        <li className='site-menu-item'><a href="https://www.google.com/?gws_rd=ssl" className='site-menu-link'>Projects</a></li>
                        <li className='site-menu-item'><a href="https://www.google.com/?gws_rd=ssl" className='site-menu-link'>About</a></li>
                        <li className='site-menu-item'><a href="https://www.google.com/?gws_rd=ssl" className='site-menu-link'>Contact</a></li>
                        <li className='site-menu-item'><a href="https://www.google.com/?gws_rd=ssl" className='site-menu-link'>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>


)


export default Header;