import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import {login, logout, signup} from './util/session_api_util'
import {createLanguage} from './util/language_api_util'
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createLanguage = createLanguage
    window.login = login
    window.logout = logout
    window.signup = signup

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
