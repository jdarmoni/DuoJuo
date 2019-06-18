import LessonBody from './lesson_body'
import {connect } from 'react-redux'
const mapStateToProps=(state)=> {
    return {
        user: Object.values(state.entities.users)[0]
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {}
}

export default connect (mapStateToProps, mapDispatchToProps)(LessonBody)