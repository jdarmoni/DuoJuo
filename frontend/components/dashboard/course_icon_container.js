import { connect } from 'react-redux';
import CourseIconContent from './course_icon_content'
import {translate} from '../../actions/translate_actions'
import request from 'request';
import uuidv4 from 'uuid/v4';

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        // currentLanguage: currentLanguage
    };
};
let options = {
    method: 'POST',
    baseUrl: 'https://api.cognitive.microsofttranslator.com/',
    url: 'translate',
    qs: {
        'api-version': '3.0',
        'to': ['en']
        // 'to': ['de', 'it']

    },
    headers: {
        'Ocp-Apim-Subscription-Key': "a2fb1712983c4807a035c51720b545c1",
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
        'text': 'el nino!'
    }],
    json: true,
};

const mapDispatchToProps = dispatch => ({

    translate: translate(options)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseIconContent);
