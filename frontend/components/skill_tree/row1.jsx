import React from 'react'
import SkillModalContainer from './skill_modal/skill_modal_container'
import { withRouter } from 'react-router-dom';
import Skill1Container from './skills/skill_1_container';

class Row1 extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        let name;
        let language = this.props.currentUser.learning_language_string
        
        if (language === "French"){
            name = "Basics 1"
        } else if(language==="Spanish") {
            name = "Intro"
        } else if (language==="Japanese") {
            name="Intro 1"
        } else if (language==="German") {
            name="Basics 1"
        }
        return (
        
        <div className="lessons-row-container">
            <Skill1Container name={name}/>
        </div>
        )
        }
}

export default withRouter(Row1)

    