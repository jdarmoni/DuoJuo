import React from 'react';

class SkillModal extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (  
            <div className="skill-modal-container skm-pointer" id={this.props.idt}>
                <div>
                    <div className="skill-modal-icon-containers">
                        <button className="skill-modal-button">
                            <img alt="Tips and notes" className="light-bulb-img" src="//d35aaqx5ub95lt.cloudfront.net/images/explanations-lightbulb.svg"/>
                        </button>
                        <button className="skill-modal-button">
                            <img alt="Test out of level 0" className="key-img" src="//d35aaqx5ub95lt.cloudfront.net/images/key.svg"/>
                        </button>
                    </div>
                    <div className="skill-modal-info">
                        <div className="_1eGmL">
                            Level {1}
                            {/* <!-- react-text: 15102 -->Level<!-- /react-text --><!-- react-text: 15103 --> <!-- /react-text --><!-- react-text: 15104 -->0/5<!-- /react-text --> */}
                        </div>
                        <div className="skill-modal-complete">{}% Complete</div>
                    </div>
                    <div className="skm-start-btn-container">
                        <button className="skm-start-btn">Start</button>
                    </div>
                </div>
            </div>    
    )
}
}

export default SkillModal