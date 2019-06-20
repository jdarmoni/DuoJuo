import React from 'react'

class TranslateSentence extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="challenge challenge-translate">
                <h1 className="challenge-header">Write this in English</h1>
                <div className="challenge-subbox">

                    <p>cherries </p>
                    <p>tomatoes</p>
                </div>
            </div>
        )
    }
}

export default TranslateSentence