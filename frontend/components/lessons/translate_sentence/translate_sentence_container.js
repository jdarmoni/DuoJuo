import TranslateSentence from './translate_sentence'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    let user = Object.values(state.entities.users)[0];
    
    return {
        user: user,
        lang_data: user.language_data[user.learning_language][0]
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslateSentence)