import React from 'react';

const navigation = props =>{
    return(
        <div className="navigation">
            
            <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon"> </span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>01</span>About Natous</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>02</span>Your benifits</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>04</span>About Natous</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>05</span>Stories</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#"><span>06</span>Book now</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default navigation;