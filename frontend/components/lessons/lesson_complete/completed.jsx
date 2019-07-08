import React from 'react';

class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        if (document.getElementsByClassName('skill-header-container')) {
            let header = document.getElementById('skill-h-c')
            debugger
            header.style.display = 'none';
            // header.style.display ="none"
        }
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
                                                        <span class="c-s-c-day"> 1</span> DAY
                                                    </div> 

                                                </div>
                                                <div className="c-s-c-SVG-container"> {/*SVG circle */}
                                                    <svg className="c-s-c-svg">  
                                                        <g className="c-s-c-g">
                                                            <path d="M6.123233995736766e-15,-100A100,100,0,1,1,-6.123233995736766e-15,100A100,100,0,1,1,6.123233995736766e-15,-100M-1.543054966925665e-14,-84A84,84,0,1,0,1.543054966925665e-14,84A84,84,0,1,0,-1.543054966925665e-14,-84Z" fill="#e5e5e5"></path>
                                                            <path d="M6.123233995736766e-15,-100A100,100,0,1,1,-6.123233995736766e-15,100A100,100,0,1,1,6.123233995736766e-15,-100M79.88874736879293,-25.95742752749548A84,84,0,1,0,-79.88874736879293,25.95742752749548A84,84,0,1,0,79.88874736879293,-25.95742752749548Z" fill="#ff9600"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div> 
                                       
                                        <div> {/* mini circle lists */}
                                            eggs
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