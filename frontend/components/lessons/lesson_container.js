import LessonBody from './lesson_body'
import {connect } from 'react-redux'
const mapStateToProps=(state)=> {
    
    const mini_lang = Object.values(state.entities.users)[0].learning_language
    
    return {
        user: Object.values(state.entities.users)[0],
        mini_lang: mini_lang, 
        level: Object.values(state.entities.users)[0].language_data[mini_lang][0].level
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {}
}

export default connect (mapStateToProps, mapDispatchToProps)(LessonBody)