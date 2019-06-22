import React from 'react'
import TranslateSentenceContainer from '../lessons/translate_sentence/translate_sentence_container'
import {grandLessonsObj} from './grand_lessons_obj/grand_lessons_obj';

class LessonBody extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(){
        let correct = document.getElementById('skill-check-button').getAttribute('data-guess')
        let guess = document.getElementById('challenge-textarea').value
        debugger
        if (guess.toLowerCase() === correct.toLowerCase() ) {

            let langData = this.props.user.language_data[this.props.mini_lang][0]
        
            if (langData.max_level === false) {
                langData['level'] = langData.level + 1;
                document.getElementById('challenge-textarea').value = "";
                this.props.updateLangData(langData)
            } else {
                // redirect to finished scene
                langData['level'] = 0;
                this.props.updateLangData(langData)
            }
        }
    }

    render(){

        let url = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
        let currentLesson = grandLessonsObj[this.props.mini_lang][url][this.props.level] // another key for current level
        
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
                        <div className="skill-lesson-body">
                            {/* where the lesson component goes */}

                            {currentLesson}

                        </div>
                        <div className="skill-footer-container">
                            <div className="skill-footer-content-frame">
                                <div className="skill-f-c-f">
                                    <div className="skill-skip-button">
                                        <button className="skill-f-bs">Skip</button>
                                    </div>

                                    <div className="skill-check-button">
                                        <button className="skill-f-bs" id="skill-check-button" data-guess="eggs " onClick={this.handleSubmit.bind(this)}> Check</button>
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