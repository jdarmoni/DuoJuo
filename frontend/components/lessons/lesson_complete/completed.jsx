import React from 'react';

class Completed extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if (document.getElementsByClassName('skill-header-container')) {
            
            let header = document.getElementById('skill-h-c')
            if (header && this.props.completed) { header.style.display = 'none'; }
            let body = document.getElementById('s-l-b-box');

            let height = document.getElementsByClassName('second-skill-div')[0].offsetHeight

            if (body && this.props.completed) { body.style.height = `${height - 141}px`}
        }
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
                                                        <span className="c-s-c-day"> {this.props.site_streak}</span> DAY
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
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-1">
                                                        M
                                                    </span>
                                                    <div className="mini-d-c-rotate"> 
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.monday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-2">
                                                        T
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.tuesday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-3">
                                                        W
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.wednesday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-4">
                                                        TH
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.thursday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-5">
                                                        F
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.friday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-6">
                                                        S
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.saturday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mini-day-c">
                                                <div className="mini-day-c-sub">
                                                    <span className="mini-d-c-span" id="comp-0">
                                                        S
                                                    </span>
                                                    <div className="mini-d-c-rotate">
                                                        <svg className="m-d-c-svg">
                                                            <g className="m-d-c-g">
                                                                <path d="M1.2246467991473533e-15,-20A20,20,0,1,1,-1.2246467991473533e-15,20A20,20,0,1,1,1.2246467991473533e-15,-20M-2.792194702055965e-15,-15.2A15.2,15.2,0,1,0,2.792194702055965e-15,15.2A15.2,15.2,0,1,0,-2.792194702055965e-15,-15.2Z" fill={this.props.sunday}></path>
                                                                <path className="_1IdLW" d="M1.2246467991473533e-15,-20L9.307315673519883e-16,-15.2Z" fill="#ff9600"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            

                                        </div> 
                                    </div>
                                    <h2>Lesson Complete! 10 XP</h2>
                                    <div className="c-c-XP">You've earned {this.props.progress} XP today</div>
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