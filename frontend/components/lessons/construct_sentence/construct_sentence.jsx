import React from 'react';

class ConstructSentence extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        // probably loop through each prop-passed word, creating a ul of (function component?) HTML words, store those in state - render those state ULs in c-s-word-box
    }
    render(){
        return (
            <>
                <div className="challenge challenge-translate">
                    <h1 className="challenge-header">Write this in English</h1>
                    <div className="challenge-subbox">
                        <div className="challenge-translate-prompt">
                            <span className="challenge-sentence">{this.props.sentence}</span>
                            {/* you'll interpolate above span from props later  */}
                        </div>

                        {/* CONSTRUCT SENTENCE START */}
                        <div className="construct-sentence-parent-container">
                            <div className="construct-sentence-child-container">
                                <div className="construct-sentence-content-container">
                                    <div className="construct-sentence-top-half" dir="ltr">
                                        <div className="c-s-t-h-section">
                                            <div className="c-s-t-h-sub-section">
                                                <div className="c-s-t-h-mini-divs"></div>
                                                <div className="c-s-t-h-mini-divs"></div>
                                                <div className="c-s-t-h-mini-divs"></div>
                                                <div className="c-s-t-h-mini-divs"></div>
                                                <div className="c-s-t-h-mini-divs"></div>

                                            </div>
                                            
                                            <div className="c-s-t-h-word-box">
                                                    {/* I think this is where you're goin to push/render the word buttons! */}
                                            </div>

                                        </div>
                                    </div>

                                    <div className="construct-sentence-bottom-half">
                                        <div className="c-s-word-box">
                                            <button className="c-s-word-button">
                                                word
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    
                    </div>
                </div>

            </>
        )
    }
}

export default (ConstructSentence)