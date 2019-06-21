import { connect } from 'react-redux';
import SkillModal from './skill_modal';

const mapStateToProps = (state) => {

    return {
        user: Object.values(state.entities.users)[0]
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillModal);
