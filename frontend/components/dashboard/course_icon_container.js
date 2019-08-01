import { connect } from 'react-redux';
import CourseIconContent from './course_icon_content'
import {translate} from '../../actions/translate_actions'
import {createSentence} from '../../actions/grammar_actions'

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        // currentLanguage: currentLanguage
    };
};

let options;
let guide;

const mapDispatchToProps = dispatch => ({
    translate: ()=>translate(options),
    createSentence: ()=> createSentence(guide, 5)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseIconContent);
