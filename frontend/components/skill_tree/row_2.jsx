import React from 'react'
import SkillModalContainer from './skill_modal/skill_modal_container';
import Basics2Container from './skills/basics_2_container';
import GreetingsContainer from './skills/greetings_container';

class Row2 extends React.Component {
    constructor(props) {
        super(props)
    }
// to use a modal, need to have a component did mount!
    render() {
        return (


            <div className="lessons-row-container">

                
                <GreetingsContainer />
                <Basics2Container />

                
            </div>
        )
    }
}

export default Row2 