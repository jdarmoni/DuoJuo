import React from 'react'
import TranslateSentenceContainer from '../lessons/translate_sentence/translate_sentence_container'
import {grandLessonsObj} from './grand_lessons_obj/grand_lessons_obj';
import CompletedContainer from './lesson_complete/completed_container';
import { throws } from 'assert';

class LessonBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            correctAnswer: "",
            default: true,
            correct: false,
            wrong: false,
            lessonLength: 0,
            currentLesson: "",
            completed: false
        }
    }
    componentDidMount(){
        
        let correctAnswer = "first";
        let url = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]

        if (document.getElementById('skill-check-button')) {
            this.setState({
                correctAnswer: document.getElementById('skill-check-button').getAttribute('data-guess'),
                lessonLength: grandLessonsObj[this.props.mini_lang][url].length
            })
        } 
        // if you're on the completed page, but you refresh - overwrite the default False to True
        // if (document.getElementsByClassName('completed-container') && this.state.completed === false) {
        //     this.setState({
        //         completed: true
        //     })
        // }
    }
    componentDidUpdate(){
        if (document.getElementById('skill-check-button')) {
            let correct = document.getElementById('skill-check-button').getAttribute('data-guess');
            
            if (correct !== this.state.correctAnswer) {
                this.setState({
                    correctAnswer: document.getElementById('skill-check-button').getAttribute('data-guess')
                })
            }
        } 
        
        if (this.state.lessonLength === this.props.skill.skill_level) {
            
            // let langData = this.props.user.language_data[this.props.mini_lang];
            // langData['level'] = 0;
            // this.props.updateLangData(langData);
        }
    }
    renderLesson(){
        // it's hitting completed first, because on first render the state's lesson length is 0 - use skill.num_levels; may require refactor :/
        if (this.state.lessonLength === this.props.skill.skill_level){
            return <CompletedContainer completed={this.state.completed} />
        } else {
            return this.state.currentLesson[this.props.skill.skill_level]
        }

    }
    handleSubmit(){
        let textArea = document.getElementById('challenge-textarea')
        let markMeaning = document.getElementById('m-m-c')
        let construct = document.getElementById('construct-component')
        let guess;
        
        if (this.state.completed){
            // UPDATE SKILL TO 0
            let skill = this.props.skill;
            skill['skill_level'] = 0;
            
            this.props.updateSkill(skill).then(
                this.props.history.replace('/')
                )
            return
        }
        if (this.state.default) {
            //******* SET GUESS BASED ON TYPE OF LESSON **********
            
            if (textArea) {
                guess = document.getElementById('challenge-textarea').value
            } else if (markMeaning) {

                if (document.getElementById('radio1').checked === true) {
                    guess = document.getElementById('radio1').value
                } else if (document.getElementById('radio2').checked === true) {
                    guess = document.getElementById('radio2').value
                } else {
                    guess = document.getElementById('radio3').value
                } 
            } else if (construct) {
                guess = "";
                
                let length = document.getElementsByClassName('c-s-t-h-word-box')[0].childElementCount;
                for (let i = 0; i < length; i++){
                    guess += document.getElementsByClassName('c-s-t-h-word-box')[0].children[i].children[0].children[0].innerText + " "
                    
                } 
                guess = guess.slice(0, guess.length -1)

            }
            
            if ( (guess.toLowerCase() === this.state.correctAnswer.toLowerCase() ) || (guess.toLowerCase().slice(0, guess.length - 1) === this.state.correctAnswer.toLowerCase() ) ) {
                this.setState({
                    correct: true,
                    wrong: false,
                    default: false
                })
            } else {
                this.setState({
                    correct: false,
                    wrong: true,
                    default: false
                })
            }               
        }
        if (!this.state.default) {
            // wrong answer should add answer to back of array and not update the level:
            if (textArea) { document.getElementById('challenge-textarea').value = ""; }

            if (this.state.wrong) {
                let array = this.state.currentLesson

                array.push(array.splice(this.props.skill.skill_level, 1)[0]);
    
                this.setState({
                    currentLesson: array,
                    default: true,
                    wrong: false,
                    correct: false
                })

            } else {
                // correct answer updates the user's level
                let currentSkill = this.props.skill
                currentSkill['skill_level'] = currentSkill.skill_level + 1;
                
                
                if (this.state.lessonLength === currentSkill.skill_level) { 
                    // if you've finished the last lesson
                    let user = this.props.user;
                    user['rupees'] = user.rupees + 1;
                    user['site_streak'] = 1;
                    
                    this.props.updateUser(user).then(
                        this.setState({completed: true})
                    );
                    // CHECK CALENDARS
                    if (this.props.calendar.length > 0) {
                        // IF THERE IS A CALENDAR OBJECT FOR TODAY
                        let calendars = this.props.calendar
                        
                        for (let i = 0; i < calendars.length; i++) {
                            let today = new Date().getDate();
                            
                            if (calendars[i].datetime === today) {
                                calendars[i]["improvement"] += 10;
                                this.props.updateCalendars(calendars[i])
                                
                                break
                            }
                        }
                    } else {
                        // MAKE NEW CALENDER IF ISNT ONE
                        let calendar = {};
                        calendar["improvement"] = 10;
                        calendar["user_id"] = this.props.user.id
                        calendar["datetime"] = new Date().getDate()
                        
                        this.props.createCalendars(calendar)
                    }
                }
                
                this.props.updateSkill(currentSkill).then(
                    this.setState({
                        default: true,
                        wrong: false,
                        correct: false
                    })
                )
            }
        }
    }
    skip(){
        // APPARENTLY SKIP SHOULD STILL RESULT IN WRONG ANSWER, I.E, add: default: false, wrong: true to setState

        let array = this.state.currentLesson
        
        array.push(array.splice(this.props.skill.skill_level, 1)[0]);
        
        this.setState({
            currentLesson: array
        })
        // https://stackoverflow.com/questions/24909371/move-item-in-object-to-last-position
    }
    renderFooter(){
        if (this.state.default === true) {
            return (
                <div className="skill-footer-container">
                    <div className="skill-footer-content-frame">
                        <div className="skill-f-c-f">
                            <div className="skill-skip-button">
                                <button className="skill-f-bs" onClick={this.skip.bind(this)}>Skip</button>
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
                                        <span className="skill-correct-image skill-incorrect-image"></span>
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
                                                <div className="crct-mini-image mini-i-flag"></div>
                                                <span className="crct-bottom-span wrong-color-text">REPORT</span>
                                            </a>
                                            <a className="crct-bottom-a" href="">
                                                <div className="crct-mini-image mini-i-speech"></div>
                                                <span className="crct-bottom-span wrong-color-text">DISCUSS ({Math.floor(Math.random() * 100)})</span>

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
        
        // set currentLesson to an array so that you can use skip button
        // let currentLesson = grandLessonsObj[this.props.mini_lang][url][this.props.level] // another key for current level
        if (this.state.currentLesson === "") {
            let url = this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
            this.setState({currentLesson: grandLessonsObj[this.props.mini_lang][url]})
        }
        
        let progressBar = document.getElementById('skill-p-g')
        if (progressBar){
            progressBar.style=`opacity: 1;width: ${this.props.skill.skill_level / this.state.currentLesson.length * 100}%;`;
        }
        return (
            <div className="first-skill-div">
                <div className="second-skill-div">
                    <div className="third-skill-div">
                        <div className="skill-header-container" id="skill-h-c">
                            <div className="skill-header-content-frame">
                                <a className="skill-x-button" href="/"></a>
                                <div className="skill-progress-button">
                                    <div className="skill-progress-container-anon">
                                        <div className="skill-progress-container">
                                            <div className="skill-progress-green" id="skill-p-g">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-lesson-body" id="s-l-body">
                            <div className="s-l-b-box" id="s-l-b-box">

                                {/* where the lesson component goes */}

                                {/* {      this.state.currentLesson[this.props.skill.skill_level]} */}
                                {this.renderLesson()}
                            </div>
                        </div>
                        {this.renderFooter()}

                    </div>
                </div>
            </div>
        )
    }
}

export default (LessonBody)