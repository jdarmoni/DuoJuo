import React from 'react';

const SkillModal = ()=> {

    return (
        
    <div className="skill-modal-container skm-pointer">
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
                    eggs
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

export default SkillModal