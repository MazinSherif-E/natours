import React from 'react';
import '../../App.css';
import logo from '../../../src/images/logo-white.png' ;


const header=props=>{
    return(
        <div className="body">
            
            <header className="header">
                <div className="header__logoBox">
                    <img src={logo} alt="logo" className="header__logo"/>
                </div>

                <div className="header__textBox">
                    <h1 className="headingPrimary">
                        <span className="headingPrimary__Main">Outdoors</span>
                        <span className="headingPrimary__Sub"> is where life happens</span>
                    </h1>

                    <a href='#' className="btn btnWhite">Discover our tools</a>

                </div>
            </header>
        </div>
    )
}

export default header;