import React from 'react';
import { Link } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import { withRouter } from 'react-router-dom';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
        
        const modal = document.getElementById("myModal");

        // Get the button that opens the modal
        const btn = document.getElementById("login-button");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.state = a user (bc we're in session) - and so the state is one user, which we merge with an empty object and then return as user
        const user = Object.assign({}, this.state);
        this.props.processForm(user);


    }

    render() {
        return (
            < div id = "myModal" className = "modal" >
                {/* Modal content */ }
                < div className = "modal-content" >
                    <span className="close">&times;</span>
                    <form action="">
                        <h1>Log in</h1>
                    </form>
                    
                </div >
            </div >
        )
    }
};


export default withRouter(LoginModal);
