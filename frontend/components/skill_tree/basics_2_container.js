import { connect } from 'react-redux';
import Basics2 from './basics_2';

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        // session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languages: state.entities.languages
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics2);
