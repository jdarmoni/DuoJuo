import React from 'react'
import Basics1Container from './basics_1_container'

class FrenchCourseContent extends React.Component {
    constructor(props){
        super(props)
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
                            {/* for one module */}
                            <Basics1Container />

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FrenchCourseContent