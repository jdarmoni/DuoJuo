import React from 'react';
import TranslatedWord from '../translated_words/translated_word';


class MarkMeaning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            target: null
        }

    }
    
    componentDidMount() {

        let correct = this.props.correct
        let challengeTextArea = document.getElementById('challenge-textarea')
        if (challengeTextArea) {
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }
        
    }

    selected(e){
        
        this.setState({
            answer: e.target.valueOf().id,
            target: e.target
        })
    }


    render() {
        if (document.getElementById('skill-check-button')) {
            let correct = this.props.correct
            let challengeTextArea = document.getElementById('challenge-textarea')
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }
        
        let sentence;
        if (!this.props.eng) {
            sentence = this.props.sentence.split(' ').map((word) => {
                return <TranslatedWord word={word} />
            })
        } else sentence = this.props.sentence
        
        if (this.state.target !== null) {
            
            let number = this.state.target.id[this.state.target.id.length - 1]
            let label = document.getElementById(`r-l-${number}`);
            let numID = document.getElementById(`m-m-${number}`)
            
            // add class to label
            label.classList.add('checked');
            numID.classList.add('checked');
            // remove class from other two labels
            for (let i = 1; i < 4; i++) {
                
                if (i !== parseInt(number)) {
                    label = document.getElementById(`r-l-${i}`)
                    numID = document.getElementById(`m-m-${i}`)
                    
                    label.classList.remove('checked')
                    numID.classList.remove('checked')
                }
            }
        }

        return (
            <>
                <div className="challenge challenge-translate">
                    <h1 className="challenge-header">Mark the correct meaning</h1>
                    <div className="challenge-subbox">
                        <div className="challenge-translate-prompt">
                            
                            <span className="challenge-sentence">{sentence}</span>
                            {/* you'll interpolate above span from props later  */}
                        </div>

                        <div className="mark-meaning-content" id="m-m-c">
                            <ul className="m-m-ul">
                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio1" id="r-l-1">
                                        <div className="m-m-number" id="m-m-1">1</div>
                                        <input 
                                        type="radio" 
                                        name="radios" 
                                        id="radio1" 
                                        className="m-m-input" 
                                        onChange={this.selected.bind(this)} 
                                        checked={this.state.answer ==="radio1"} 
                                        value={this.props.phrase1}/>
                                        <div className="m-m-choice-div">{this.props.phrase1}</div>
                                    </label>
                                </li>

                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio2" id="r-l-2">
                                        <div className="m-m-number" id="m-m-2">2</div>
                                        <input 
                                        type="radio" 
                                        name="radios" 
                                        id="radio2" 
                                        className="m-m-input" 
                                        onChange={this.selected.bind(this)} 
                                        checked={this.state.answer === "radio2"} 
                                        value={this.props.phrase2}/>
                                        <div className="m-m-choice-div">{this.props.phrase2}</div>
                                    </label>
                                </li>

                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio3" id="r-l-3">
                                        <div className="m-m-number" id="m-m-3">3</div>
                                        <input 
                                        type="radio" 
                                        name="radios" 
                                        id="radio3" 
                                        className="m-m-input" 
                                        onChange={this.selected.bind(this)} 
                                        checked={this.state.answer === "radio3"} 
                                        value={this.props.phrase3}/>
                                        <div className="m-m-choice-div">{this.props.phrase3}</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default MarkMeaning