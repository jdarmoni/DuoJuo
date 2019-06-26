import React from 'react'
import Basics1 from '../skill_tree/basics_1'
import Basics2 from '../skill_tree/basics_2'
import Row3 from '../skill_tree/row_3'

class CourseIconContent extends React.Component {
    constructor(props){
        super(props)
    }
    languages(){
        // if (this.props.currentLanguage === french) {
            return (
                <>
                <Basics1Container />
                <Basics2 />
                <Row3 />
                </>
            )
        
    }
    render(){
        
        return (
            // convert into component
            <div className="course-content-container">
                <div>
                    <div className="course-module-container">
                        <div className="skill-tree">
                            <a className="global-practice" href="/">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/dumbbell-blue.svg" />
                            </a>

                            {/* eventually this.languages() */}
                            <Basics1 />
                            <Basics2 />
                            <Row3 />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseIconContent