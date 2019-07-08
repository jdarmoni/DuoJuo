import React from 'react';

class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="completed-container">
                <div className="completed-container-sub-div">
                    <div className="c-c-height-c">
                        <div className="c-c-c-2">
                            <div className="c-c-c-3">
                                <div className="c-c-c-4">
                                    <div className="calendar-container">
                                        <div className="calendar-streak-container"> 
                                            <div className="c-s-c-box">
                                                <div> {/*no styling - just container */}
                                                    <div className ="c-s-c-flame"></div> { /* little flame */}
                                                    
                                                    <div className="c-s-c-parent"> { /* parent box sizing */}
                                                        <span class="c-s-c-day"> 1 DAY</span>
                                                    </div> 

                                                </div>
                                                <div> {/*SVG circle */}

                                                </div>
                                            </div>
                                        </div> 
                                       
                                        <div> {/* mini circle lists */}
                                        
                                        </div> 
                                    </div>
                                    <h2>Lesson Complete! 10 XP</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default (Completed)