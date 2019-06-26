import React from 'react'
import SkillModalContainer from './skill_modal/skill_modal_container';
import Basics22 from './skills/basics_2';
import Greetings from './skills/greetings';

class Row2 extends React.Component {
    constructor(props) {
        super(props)
    }
// to use a modal, need to have a component did mount!
    render() {
        return (


            <div className="lessons-row-container">

                
                <Greetings />
                <Basics22 />

                
            </div>
        )
    }
}

export default Row2 