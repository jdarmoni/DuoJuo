import LessonBody from './lesson_body';
import {connect } from 'react-redux';
import { updateLanguageData} from '../../actions/language_data_actions';
import {updateSkill} from '../../actions/skill_actions';
import {updateUser} from '../../actions/user_actions';
import { createCalendars, updateCalendars} from '../../actions/calendar_actions';

const mapStateToProps=(state, ownProps)=> {
    
    const mini_lang = Object.values(state.entities.users)[0].learning_language
    const skillName = ownProps.location.pathname.split('/')[ownProps.location.pathname.split('/').length -1]
    
    let allSkills = Object.values(state.entities.users)[0].language_data[mini_lang].skills
    
    let currentSkill;
    let user = Object.values(state.entities.users)[0]
    allSkills.forEach(skill => {
        
        if (skill.url_title === skillName) {
            
            currentSkill = skill
        }
    });
    
    return {
        user: user,
        mini_lang: mini_lang, 
        skill: currentSkill,
        calendar: user.calendar
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateLangData: (language_data)=> dispatch(updateLanguageData(language_data)),
        updateSkill: (skill_data)=> dispatch(updateSkill(skill_data)),
        updateUser: (user)=>dispatch(updateUser(user)),
        createCalendars: (calendar)=>dispatch(createCalendars(calendar)),
        updateCalendars: (calendar)=>dispatch(updateCalendars(calendar))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(LessonBody)