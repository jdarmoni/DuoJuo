import React from 'react'
import TranslateSentenceContainer from '../lessons/translate_sentence/translate_sentence_container'
import {grandLessonsObj} from './grand_lessons_obj/grand_lessons_obj';

class LessonBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            correctAnswer: "",
            default: false,
            correct: false,
            wrong: true
        }
    }
    componentDidMount(){
        let correctAnswer = "first";
        if (document.getElementById('skill-check-button')) {
            this.setState({
                correctAnswer: document.getElementById('skill-check-button').getAttribute('data-guess')
            })
        } 
        
    }
    handleSubmit(){
        // replace correct with this.state.correctAnswer
        let correct = document.getElementById('skill-check-button').getAttribute('data-guess')
        let guess = document.getElementById('challenge-textarea').value
        debugger
        if (guess.toLowerCase() === correct.toLowerCase() ) {

            let langData = this.props.user.language_data[this.props.mini_lang][0]
            if (langData.max_level === false) {
                langData['level'] = langData.level + 1;
                // if (langData.level > 2) {
                //     langData['max_level'] = true;
                // }
                document.getElementById('challenge-textarea').value = "";
                this.props.updateLangData(langData) // if this.state.default === false
             } // else {
            //     // redirect to finished scene
            //     langData['level'] = 0;
            //     this.props.updateLangData(langData)
            // }
        }
    }
    renderFooter(){
        if (this.state.default === true) {
            return (
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
            )
        } else if (this.state.correct === true) {
            return (
                <div className="skill-footer-container">
                    <div className="skill-footer-content-frame s-f-c-f-correct">
                        <div className="skill-f-c-f">
                            {/*  */}
                            <div className="skill-correct-container">
                                <div className="skill-correct-content">
                                    <div className="skill-correct-icon-div">
                                        <span className="skill-correct-image"></span>
                                    </div>
                                    <div className="correct-sub-content-container">
                                        <div>
                                            <h2 className="correct-h2-text">You are correct</h2>
                                        </div>
                                        <div className="correct-bottom-content-container">
                                            <a className="crct-bottom-a" href="">
                                                <div className="crct-mini-image mini-flag"></div>
                                                <span className="crct-bottom-span">REPORT</span>
                                            </a>
                                            <a className="crct-bottom-a" href="">
                                                <div className="crct-mini-image mini-speech"></div>
                                                <span className="crct-bottom-span">DISCUSS</span>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="skill-check-button">
                                <button className="skill-f-bs s-c-b-correct" id="skill-check-button" data-guess="eggs " onClick={this.handleSubmit.bind(this)}> continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
         } else {
           
            //  COULD interpolate correct/wrong into classNames, and use an if correct/wrong return method for rendering the top sub-content div
            return (
                <div className="skill-footer-container">
                    <div className="skill-footer-content-frame s-f-c-f-correct wrong-color">
                        <div className="skill-f-c-f">
                            {/*  */}
                            <div className="skill-correct-container wrong-color">
                                <div className="skill-correct-content">
                                    <div className="skill-correct-icon-div">
                                        <span className="skill-correct-image"></span>
                                    </div>
                                    <div className="correct-sub-content-container">
                                        <div>
                                            <h2 className="correct-h2-text wrong-color-text">Correct solution:
                                            <div className="incorrect-answer-div">
                                                <span> {this.state.correctAnswer} 
                                                    

                                                </span>
                                            </div>
                                            </h2>
                                        </div>
                                        <div className="correct-bottom-content-container wrong-color-text">
                                            <a className="crct-bottom-a" href="">
                                                <div className="crct-mini-image mini-flag"></div>
                                                <span className="crct-bottom-span wrong-color-text">REPORT</span>
                                            </a>
                                            <a className="crct-bottom-a" href="">
                                                <div className="crct-mini-image mini-speech"></div>
                                                <span className="crct-bottom-span wrong-color-text">DISCUSS</span>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-check-button">
                                <button className="skill-f-bs s-c-b-correct s-c-b-wrong" id="skill-check-button" data-guess="eggs " onClick={this.handleSubmit.bind(this)}> continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
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
                        {this.renderFooter()}
                        {/* <div className="skill-footer-container">
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
                        </div> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default (LessonBody)