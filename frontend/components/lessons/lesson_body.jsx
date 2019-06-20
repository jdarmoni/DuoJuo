import React from 'react'
class LessonBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="first-skill-div">
                <div className="second-skill-div">
                    <div className="third-skill-div">
                        <div className="skill-header-container">
                            <div className="skill-header-content-frame">
                                <a className="skill-x-button" href="/"></a>
                                <div className="skill-progress-button">
                                    <div className="skill-progress-container-anon">
                                        <div className="skill-progress-container">
                                            <div className="skill-progress-green">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>2
                            <br/>
                            <br/>
                            <br/>
                            2

                        </div>
                        <div className="skill-footer-container">
                            <div className="skill-footer-content-frame">
                                <div className="skill-f-c-f">
                                    <div className="skill-skip-button">
                                        <button className="skill-f-bs">Skip</button>
                                    </div>
                                    {/* <div>cherries</div> */}
                                    <div className="skill-check-button">
                                        <button className="skill-f-bs"> Check</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (LessonBody)