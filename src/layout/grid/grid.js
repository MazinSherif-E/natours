import React from 'react';
import '../../App.css'


const grid=props=>{
    return(
      <div>
        <section >
                
                <div className="row">
                    <div className="col_1_of_2">
                    col 1 of 2
                    </div>
                    <div className="col_1_of_2">
                     col 1 of 2
                    </div>
                </div>
                
                <div className="row">
                    <div className="col_1_of_3">
                      col 1 of 3
                    </div>
                    <div  className="col_1_of_3">
                      col 1 of 3
                    </div>
                    <div  className="col_1_of_3">
                      col 1 of 3
                    </div>
                </div>  
                    
                <div className="row">
                    <div  className="col_1_of_3">
                      col 1 of 3
                    </div>
                    <div  className="col_2_of_3">
                      col 2 of 3
                    </div>
                </div>  
                    
                <div className="row">
                    <div  className="col_1_of_4">
                      col 1 of 4
                    </div>
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                </div>    
                
                <div className="row">
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                     <div className="col_2_of_4">
                      col 2 of 4
                    </div>
                </div> 
                    
                <div className="row">
                    <div className="col_1_of_4">
                      col 1 of 4
                    </div>
                    <div className="col_3_of_4">
                      col 3 of 4
                    </div>
                </div> 
        </section>
        </div>
  )
    }
export default grid;