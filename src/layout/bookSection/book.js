import React from 'react';
import '../../App.css';

const book = props =>{
    return (
    <div className="section-book">
        <div className="row">
            <div className="book">
                <div className="book__form">
                    <form className="form" action="#">

                        <div className=" margin_bottom_small">
                            <h2 className="heading_secondary" style={{paddingBottom:"4rem"}}>
                                 Start booking now!
                            </h2> 
                        </div>
                        
                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                            <label for="name" className="form__label">Full Name</label>
                        </div>

                        <div className="form__group">
                                <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                                <label for="email" className="form__label">
                                        Email address
                                </label>
                        </div>

                        <div className="form__group">
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="small" name="size"/>
                                <label for="small" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                        Small tour group
                                </label>
                            </div>

                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="large" name="size"/>
                                <label for="large" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                        Large tour group
                                </label>
                            </div>
                        </div>
                    
                    <div className="form__group" style={{paddingTop:"5rem"}}>
                            <button href="#" className="btn btnGreen" >Next step &rarr;</button>
                    </div>

                    </form>
                </div>   
            </div>
        </div>
    </div>
    )
}

export default book;