import React from 'react';
import '../../App.css'

const features = props =>{
    return(
        <div>
            <section className="feature_section">

                    <div className="row">

                        <div  className="col_1_of_4">
                            <div className="featureBox">
                                <i className="featureBox__icon icon-basic-world"></i>
                                <h3 className="heading_teriary margin_bottom_small">Explore The World</h3>
                                <p className="featureBox__text">
                                Vitae congue mauris rhoncus aenean vel elit scelerisque.
                                </p>
                            </div>
                        </div>

                        <div className="col_1_of_4">
                            <div className="featureBox">
                            <i className="featureBox__icon icon-basic-compass"></i>
                            <h3 className="heading_teriary margin_bottom_small">Meet Nature</h3>
                            <p className="featureBox__text">
                            Id nibh tortor id aliquet. Amet justo donec enim diam vulputate ut pharetra 
            
                            </p>
                            </div>
                        </div>
                        
                        <div className="col_1_of_4">
                            <div className="featureBox">
                                <i className="featureBox__icon icon-basic-map"></i>
                                <h3 className="heading_teriary margin_bottom_small">Find Your Way</h3>
                                <p className="featureBox__text">
                                Id nibh tortor id aliquet. Amet justo donec enim diam vulputate ut pharetra
                                </p>
                            </div>
                        </div>

                        <div className="col_1_of_4">
                            <div className="featureBox">
                                <i className="featureBox__icon icon-basic-heart"></i>
                                <h3 className="heading_teriary margin_bottom_small">Find Your Way</h3>
                                <p className="featureBox__text">
                                Id nibh tortor id aliquet. Amet justo donec enim diam vulputate ut pharetra
                                </p>
                            </div>
                        </div>

                    </div>  
            </section>
        </div>
    )
   }

export default features;