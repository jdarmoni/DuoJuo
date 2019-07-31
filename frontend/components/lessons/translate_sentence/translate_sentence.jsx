import React from 'react'
import TranslatedWord from '../translated_words/translated_word'


class TranslateSentence extends React.Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        
        let correct = this.props.correct
        let challengeTextArea = document.getElementById('challenge-textarea')
        if (challengeTextArea) {
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)        
        }
    }
    componentDidUpdate(){
        if (document.getElementsByClassName('translate-div-content')[0]) {
            let html = document.getElementsByClassName('translate-div-content');
            
            for (let i = 0; i < html.length; i++) {

                html[i].children[0].innerText = "";
            }
        

        }
    }

    render(){
        if (document.getElementById('skill-check-button')) {
            let correct = this.props.correct
            let challengeTextArea = document.getElementById('challenge-textarea')
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }
        //************ */ TRANSLATE API LOGIC
        let sentence;
        if (!this.props.eng) {
            sentence = this.props.sentence.split(' ').map((word) => {
                return <TranslatedWord word={word} />
            })
        } else sentence = this.props.sentence

        //*********** */
        
        return (
            <>
            <div className="challenge challenge-translate">
                <h1 className="challenge-header">Write this in English</h1>
                <div className="challenge-subbox">
                    <div className="challenge-translate-prompt"> 
                        <button className="challenge-listen"> 
                        <div className="c-l-s-d"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 73" width="94" height="73" preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%',/* transform: translate3d(0px, 0px, 0px); */}}><defs><clipPath id="__lottie_element_2"><rect width="94" height="73" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_4"><path d="M0,0 L1000,0 L1000,1038 L0,1038z"></path></clipPath><clipPath id="__lottie_element_9"><path d="M0,0 L1338,0 L1338,738 L0,738z"></path></clipPath></defs><g clipPath=""><g clipPath="" transform="matrix(0.26499998569488525,0,0,0.26499998569488525,-84.5,-101.53498840332031)" opacity="1" style={{display: 'block'}}><g style={{display: 'block'}} transform="matrix(1.3600000143051147,0,0,1.3600000143051147,516.219970703125,522.4000244140625)" opacity="0.8557684239998765"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="22.488120633823932" d=" M48.93299865722656,-88.35800170898438 C79.9729995727539,-71.11699676513672 101,-37.99399948120117 101,0 C101,38.016998291015625 79.947998046875,71.15699768066406 48.87699890136719,88.38899993896484"></path></g><g style={{display: 'block'}} transform="matrix(1.3600000143051147,0,0,1.3600000143051147,516.219970703125,522.4000244140625)" opacity="1"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="20.51122522539184" d=" M24.180999755859375,-43.02399826049805 C39.20000076293945,-34.55799865722656 49.35300064086914,-18.454999923706055 49.35300064086914,0 C49.35300064086914,18.476999282836914 39.17599868774414,34.59600067138672 24.12700080871582,43.05400085449219"></path></g><g clipPath="url(#__lottie_element_9)" transform="matrix(1.0370399951934814,0,0,0.9629600048065186,136.53640747070312,163.66775512695312)" opacity="1" style={{display: 'block'}}><g transform="matrix(1,0,0,1,260.93701171875,373.6780090332031)" opacity="1" style={{display: 'block'}}><g opacity="1" transform="matrix(6,0,0,6,0,0)"><path fill="rgb(255,255,255)" fillOpacity="1" d=" M-8.293000221252441,-11.675000190734863 C-8.293000221252441,-11.675000190734863 -0.12300000339746475,-11.675000190734863 -0.12300000339746475,-11.675000190734863 C2.9070000648498535,-11.675000190734863 5.367000102996826,-9.21500015258789 5.367000102996826,-6.184999942779541 C5.367000102996826,-6.184999942779541 5.367000102996826,6.425000190734863 5.367000102996826,6.425000190734863 C5.367000102996826,9.454999923706055 2.9070000648498535,11.914999961853027 -0.12300000339746475,11.914999961853027 C-0.12300000339746475,11.914999961853027 -8.293000221252441,11.914999961853027 -8.293000221252441,11.914999961853027 C-11.322999954223633,11.914999961853027 -13.782999992370605,9.454999923706055 -13.782999992370605,6.425000190734863 C-13.782999992370605,6.425000190734863 -13.782999992370605,-6.184999942779541 -13.782999992370605,-6.184999942779541 C-13.782999992370605,-9.21500015258789 -11.322999954223633,-11.675000190734863 -8.293000221252441,-11.675000190734863z M-4.980999946594238,-11.656999588012695 C-4.980999946594238,-11.656999588012695 10.218999862670898,-22.32699966430664 10.218999862670898,-22.32699966430664 C11.24899959564209,-23.047000885009766 12.659000396728516,-22.797000885009766 13.369000434875488,-21.777000427246094 C13.638999938964844,-21.39699935913086 13.779000282287598,-20.937000274658203 13.779000282287598,-20.476999282836914 C13.779000282287598,-20.476999282836914 13.779000282287598,20.472999572753906 13.779000282287598,20.472999572753906 C13.779000282287598,21.722999572753906 12.769000053405762,22.732999801635742 11.519000053405762,22.732999801635742 C11.059000015258789,22.732999801635742 10.609000205993652,22.593000411987305 10.218999862670898,22.322999954223633 C10.218999862670898,22.322999954223633 -4.980999946594238,11.652999877929688 -4.980999946594238,11.652999877929688 C-5.580999851226807,11.232999801635742 -5.940999984741211,10.543000221252441 -5.940999984741211,9.803000450134277 C-5.940999984741211,9.803000450134277 -5.940999984741211,-9.807000160217285 -5.940999984741211,-9.807000160217285 C-5.940999984741211,-10.536999702453613 -5.580999851226807,-11.22700023651123 -4.980999946594238,-11.656999588012695z"></path><g opacity="1" transform="matrix(1,0,0,1,0,0)"></g></g></g></g></g></g></svg></div> </button>
                        <span className="challenge-sentence">{sentence}</span>
                        {/* you'll interpolate above span from props later  */}
                    </div>
                        <div className="challenge-prompt-text-container" id="challenge-prompt">
                        <div className="c-p-t-c-sub">
                            <textarea className="challenge-textarea" id="challenge-textarea" placeholder="Type in English"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}

export default TranslateSentence