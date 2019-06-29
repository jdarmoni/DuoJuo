import LessonBody from './lesson_body'
import {connect } from 'react-redux'
import { updateLanguageData} from '../../actions/language_data_actions'

const mapStateToProps=(state, ownProps)=> {
    
    const mini_lang = Object.values(state.entities.users)[0].learning_language
    // const lessonName = 
    // const lesson = Object.values(state.entities.users)[0].language_data[mini_lang].skills
    debugger
    return {
        user: Object.values(state.entities.users)[0],
        mini_lang: mini_lang, 
        level: Object.values(state.entities.users)[0].language_data[mini_lang].level
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateLangData: (language_data)=> dispatch(updateLanguageData(language_data))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(LessonBody)