import { connect } from 'react-redux';
import CourseIconContent from './course_icon_content'

const mapStateToProps = (state) => {
    let currentLanguage;
    
    Object.values(state.entities.users)[0].languages.forEach(lang => {
        if(lang.learning = true) {
            currentLanguage = lang
        }
    });
    
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        currentLanguage: currentLanguage
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseIconContent);
