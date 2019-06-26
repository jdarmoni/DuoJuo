import React from 'react'
import SkillModalContainer from './skill_modal/skill_modal_container'
import { withRouter } from 'react-router-dom';
import Basics1Container from './skills/basics_1_container';

class Basics1 extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        
        return (
        
        <div className="lessons-row-container">
            <Basics1Container />
        </div>
        )
        }
}

export default withRouter(Basics1)

    