import React from 'react'
import SkillModalContainer from '../skill_modal/skill_modal_container'
import { withRouter } from 'react-router-dom';

class Skill1 extends React.Component {
    constructor(props){
        super(props) 

    }
    componentDidMount() {
        const modal = document.getElementById("skm-bscs1");

        // normally:
        // if clicked is false, display none
        // if clicked is true, display block
        // BUT! Could also be: 
        // if clicked is true, but display is none from other modals

        // Get the button that opens the modal
        const btn = document.getElementById("bscs1-a");
        let clicked = false;

        
        btn.onclick = function () {
            // if clicked is true, but display is none from other modals
            if (clicked && modal.style.display === "none") {
                debugger
                document.getElementById("skm-bscs2").style.display="none";
                document.getElementById("skm-grtngs1").style.display="none";
                modal.style.display = "block";

            } else if (clicked === false) {
                modal.style.display = "block";
                // hide other modals
                const modal1 = document.getElementById("skm-bscs2");
                const modal2 = document.getElementById("skm-grtngs1");
                modal1.style.display = "none";
                modal2.style.display = "none";

                clicked = true;
                
            } else if (clicked === true) {
                modal.style.display = "none";
                clicked = false;
            }
        }
        
    }

    render(){
        return (
            <a className="lesson-anchor-box" id="bscs1-a" href="javascript:;">
                <div className="_2albn">
                    <div>
                        <div className="lesson-progress-rings">
                            <div className="_2xGPj">
                                <svg height="106" version="1.1" width="106" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" style={{ overflow: 'hidden', position: 'relative', left: '-0.934596px', top: '-0.895924px' }}>
                                    <desc style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}>Created with Raphaël 2.2.0</desc>
                                    <defs style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}>
                                        <linearGradient id="ys2dy_________231.42857142857142-_ffd900:_________5-_ffd900-_ffd900:_________75-_ffd900_______" x1="0.7974733888824044" y1="0" x2="0" y2="1" gradientTransform="matrix(1,0,0,1,0,0)" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}><stop offset="0%" stopColor="#ffd900" stopOpacity="1" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></stop><stop offset="33.333333333333336%" stopColor="#ffd900" stopOpacity="1" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></stop><stop offset="66.66666666666667%" stopColor="#ffd900" stopOpacity="1" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></stop><stop offset="100%" stopColor="#ffd900" stopOpacity="1" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="53" cy="53" r="53" fill="#ffd900" stroke="#000" strokeWidth="0" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></circle>
                                    <path fill="url('https://www.duolingo.com/#ys2dy_________231.42857142857142-_ffd900:_________5-_ffd900-_ffd900:_________75-_ffd900_______')" stroke="#000000" d="M53,53L94.43706857080556,86.0449594985129A53,53,0,0,1,19.955040501487105,94.43706857080556Z" opacity="1" fillOpacity="1" strokeWidth="0" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)', opacity: 1, fillOpacity: 1 }}></path>
                                    <path fill="#e5e5e5" stroke="#000000" d="M53,53L19.95504050148714,94.4370685708056A53,53,0,0,1,52.99999999999999,0A4,4,0,1,0,52.99999999999999,8Z" strokeWidth="0" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></path>
                                    <circle cx="22.44899970892205" cy="91.30974264093345" r="4" fill="#ffd900" stroke="#000" strokeWidth="0" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></circle>
                                    <circle cx="53" cy="53" r="45" fill="#ffffff" stroke="#000" strokeWidth="0" style={{ "WebkitTapHighlightColor": 'rgba(0, 0, 0, 0)' }}></circle>
                                </svg>
                            </div>
                        </div>
                        <span className="course-image-span-container">
                            <span className={`course-image-span ${this.props.skill.short}`}></span>
                            <div className="course-crown-div">
                                <img alt="crown" className="course-crown-image" src="//d35aaqx5ub95lt.cloudfront.net/images/juicy-crown-empty.svg" />
                            </div>
                        </span>
                        <div>
                            <span className="_378Tf _3qO9M _33VdW">{this.props.name}</span>
                        </div>
                    </div>
                    {/* to reuse modal, pass down / create a name for the ID of the new modal Div (not the a tag id of the lesson icon!) */}
                    <SkillModalContainer idt={"skm-bscs1"} url={this.props.skill.url_title} skill={this.props.skill}/>
                </div>
            </a>
        )
    }
}

export default Skill1