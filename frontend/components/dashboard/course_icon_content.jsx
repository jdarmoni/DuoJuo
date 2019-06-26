import React from 'react'
import Row1 from '../skill_tree/row1'
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
                <Row1 />
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
                            <Row1 />
                            <Basics2 />
                            <Row1 />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseIconContent