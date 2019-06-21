import TranslateSentence from './translate_sentence'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslateSentence)