import React from 'react'

class MarkMeaning extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

        let correct = this.props.correct
        let challengeTextArea = document.getElementById('challenge-textarea')
        if (challengeTextArea) {
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }
    }


    render() {
        if (document.getElementById('skill-check-button')) {
            let correct = this.props.correct
            let challengeTextArea = document.getElementById('challenge-textarea')
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }

        return (
            <>
                <div className="challenge challenge-translate">
                    <h1 className="challenge-header">Mark the correct meaning</h1>
                    <div className="challenge-subbox">
                        <div className="challenge-translate-prompt">
                            
                            <span className="challenge-sentence">{this.props.sentence}</span>
                            {/* you'll interpolate above span from props later  */}
                        </div>

                        <div className="mark-meaning-content">
                            <ul className="m-m-ul">
                                <li className="m-m-li">
                                    <label className="m-m-label">
                                        <div className="m-m-number">1</div>
                                        <input type="radio"  className="m-m-input"/>
                                        <div className="m-m-choice-div">{this.props.phrase1}</div>
                                    </label>
                                </li>
                                <li className="m-m-li">
                                    <label className="m-m-label">
                                        <div className="m-m-number">2</div>
                                        <input type="radio" className="m-m-input"/>
                                        <div className="m-m-choice-div">{this.props.phrase2}</div>
                                    </label>
                                </li>
                                <li className="m-m-li">
                                    <label className="m-m-label">
                                        <div className="m-m-number">3</div>
                                        <input type="radio" className="m-m-input"/>
                                        <div className="m-m-choice-div">{this.props.phrase3}</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="challenge-prompt-text-container">
                            <div className="c-p-t-c-sub">
                                <textarea className="challenge-textarea" id="challenge-textarea" placeholder="Type in English"></textarea>
                            </div>
                        </div> */}
                    </div>
                </div>

            </>
        )
    }
}

export default MarkMeaning