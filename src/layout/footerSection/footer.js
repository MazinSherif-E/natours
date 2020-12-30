import React from 'react';
import photo1 from '../../images/logo-green-1x.png';
import photo2 from '../../images/logo-green-2x.png'
import photo_small_1 from '../../images/logo-green-small-1x.png'
import photo_small_2 from '../../images/logo-green-small-2x.png'

const footer = props => {
    return (
    <div className="footer">
        
        <div className="footer__logo-box">

            <picture className="footer__logo">
                <source srcset={`${photo_small_1} 1x, ${photo_small_2} 2x`} 
                        media="(max-width: 37.5rem)"/>
                <img srcset={`${photo1} 1x, ${photo2} 2x`} 
                     alt="Full logo" 
                     src={photo2}/>
            </picture>     
        
        
        
        </div>

        <div className="row">
            <div className="col_1_of_2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">terms</a></li> 
                    </ul>
                </div>
            </div>

            <div className="col_1_of_2">
                <p className="footer__paragraph">
                    Built my <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer__link">Advanced CSS an Sass</a>. Copyright &copy;  by jonas schmetmenn. You are 100% allowed to use his webpage for both personal and commercial use but NOT to claim it as your own design. A credit to your original author , is of course highly appreciatied! 
                </p>
            </div>
        </div>

    </div>
)
}

export default footer;