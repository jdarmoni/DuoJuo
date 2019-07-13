import React from 'react'
import ReactDOM from 'react-dom';

class Word extends React.Component {
    constructor(props){
        super(props);
    }
    toggle(){
        
        if (this.props.toggled){
            
            this.props.oldButton.disabled = false
            
            // keep track of the div you want to destroy, so that after we unmount, we can still clean up the mess
            let destroyDiv= document.activeElement.parentElement.parentElement
                
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
            destroyDiv.remove()
        }
         else {
            let wordBox = document.getElementsByClassName('c-s-t-h-word-box')[0]
             let oldButton = document.activeElement
             let newWord = <Word word={this.props.word} id={`word-button-${this.props.number}`} toggled={true} oldButton ={oldButton}/>
             
            document.activeElement.disabled = true
            
            // Brute Force: to not get overwritten by ReactDOM append a div into wordbox with an ID, then reactDOM.render(newWord, newDiv)
            let newDiv = document.createElement("div")
            wordBox.appendChild(newDiv)
            return (

                ReactDOM.render(
                    newWord,
                    newDiv
                )
            )
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