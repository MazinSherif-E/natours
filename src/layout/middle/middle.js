import React from 'react';
import '../../App.css';
import photo1 from '../../images/nat-1-large.jpg';
import photo2 from '../../images/nat-2-large.jpg';
import photo3 from '../../images/nat-3-large.jpg';

const middle = props => {
    return(
        <div>
            <main className="section_about">
                <section >

                    <div className="center_text margin_bottom_big ">
                        <h2 className="heading_secondary">
                            Exciting  tours  for  adventurous  people
                        </h2> 
                    </div>           

                <div className="row">

                    <div className="col_1_of_2">
                        <h3 className="heading_teriary margin_bottom_small">
                            You're going to fall in love with nature
                        </h3>
                        <p className="paragraph">
                        consectetur a erat nam at lectus urna. Nullam ac tortor vitae purus faucibus. 
                        In fermentum et sollicitudin ac. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
                        </p>

                        <h3 className="heading_teriary margin_bottom_small">
                           Live advetures like you never have before
                        </h3>
                        <p className="paragraph">
                         Non nisi est sit amet. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
                        </p>

                        <a href="#" className="btn_text">Learn more &rarr;</a>

                    </div>

                    <div className="col_1_of_2">

                        <div className="componsition">
                            <img src={photo1} className="componsition__photo componsition__photo_p1"></img>
                            <img src={photo2} className="componsition__photo componsition__photo_p2"></img>
                            <img src={photo3} className="componsition__photo componsition__photo_p3"></img>
                        </div>
                    </div>
                </div>

                </section>   
            </main>
        </div>
    )
}

export default middle;