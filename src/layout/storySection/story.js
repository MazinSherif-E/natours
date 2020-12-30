import React from 'react';
import '../../App.css';
import photo1 from './nat-8.jpg';
import photo2 from './nat-9.jpg';
import video1 from './video.mp4';
import video2 from './video.webm';

const story = props =>{
    return(
        <div className="story-section">
            
            <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop >
                    <source src={video1} type="video/mp4"/>
                    <source src={video2} type="video/webm"/>
                    Your browser is not supported
                </video>
            </div>

            <div className="center_text margin_bottom_big">
                <h2 className="heading_secondary" style={{paddingBottom:"3rem"}}>
                    We make people genuily happy
                </h2> 
            </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={photo1} alt="Person on a tour" className="story__img"/>
                    <figcaption className="story__caption">MAry smith</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading_teriary margin_bottom_small">I had the best week ever with my family</h3>
                    <p>Pellentesque nec nam aliquam sem. Id ornare arcu odio ut sem nulla. Sit amet purus gravida quis blandit turpis. 
                        Senectus et netus et malesuada fames ac turpis egestas. Ipsum a arcu cursus vitae.
                         Pulvinar neque laoreet suspendisse interdum consectetur.
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={photo2} alt="Person on a tour" className="story__img"/>
                    <figcaption className="story__caption">jack wilson</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading_teriary margin_bottom_small">WOW!! my life is completely diffirent now</h3>
                    <p>Pellentesque nec nam aliquam sem. Id ornare arcu odio ut sem nulla. Sit amet purus gravida quis blandit turpis. 
                        Senectus et netus et malesuada fames ac turpis egestas. Ipsum a arcu cursus vitae.
                         Pulvinar neque laoreet suspendisse interdum consectetur.
                    </p>
                </div>
            </div>
        </div>
        <div className="center_text ">
            <a href="#" className="btn_text" >Read all stories &rarr;</a>
        </div>
    </div>
    )
}

export default story;