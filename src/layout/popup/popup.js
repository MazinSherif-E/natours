import React from 'react';
import img1 from './nat-8.jpg';
import img2 from './nat-9.jpg' 

const popup = props =>{
    return(
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left-side">
                    <img src={img1} alt="Tour photo" className="popup__img"/>
                    <img src={img2} alt="Tour photo" className="popup__img"/>
                </div>

                <div className="popup__right-side">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading_secondary margin_bottom_small">Start booking now</h2>
                    <h3 className="heading_teriary margin_bottom_small">important &ndash; please read these terms before booking</h3>
                    <p className="popup__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Porttitor massa id neque aliquam vestibulum morbi blandit. Lectus quam id leo in vitae turpis massa sed elementum. Eget mi proin sed libero enim. Dignissim enim sit amet venenatis urna cursus eget. Ut tellus elementum sagittis vitae et leo duis. Non nisi est sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Vitae congue mauris rhoncus aenean vel. Gravida arcu ac tortor dignissim convallis aenean et tortor. Eu ultrices vitae auctor eu augue ut lectus. At lectus urna duis convallis. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt.
                    </p>
                    <a href="#" className="btn btnGreen">Book now</a>
                </div>
            </div>
        </div>
    )
}

export default popup;