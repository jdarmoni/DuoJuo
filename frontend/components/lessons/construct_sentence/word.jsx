import React from 'react'
import ReactDOM from 'react-dom';

class Word extends React.Component {
    constructor(props){
        super(props);
    }
    toggle(){
        
        if (this.props.toggled){
            
            this.props.oldButton.disabled = false
            
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);

            // document.activeElement.parentElement.remove()
        }
         else {
            let wordBox = document.getElementsByClassName('c-s-t-h-word-box')[0]
             let oldButton = document.activeElement
             let newWord = <Word word={this.props.word} id={`word-button-${this.props.number}`} toggled={true} oldButton ={oldButton}/>
             
            document.activeElement.disabled = true
            
            let newDiv = document.createElement("div")
            // newDiv.id = Math.random
            wordBox.appendChild(newDiv)
            // to not get overwritten append a div into wordbox with an ID, then reactDOM.render(newWord, newDiv)
            return (

                ReactDOM.render(
                    newWord,
                    newDiv
                )
            )
            // put it on the Dom somehow
        }
    }

    render(){
        return (
            <div className="c-s-word-box">
                <button className="c-s-word-button" id={`word-button-${this.props.number}`} onClick={this.toggle.bind(this)}>
                    {this.props.word}
                </button>
            </div>
            )
    }
}
export default(Word)