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
        
        const modal = document.getElementById("myModalLogin");

        // Get the button that opens the modal
        const btn = document.getElementById("login-button");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close-login")[0];

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
        const user = Object.assign({}, this.state);
        // if (this.props.currentUser) {
            // this.props.logout(this.props.currentUser)
        // }
        this.props.processForm(user);
        
    }
    renderErrors() {
        
        if (this.props.formType === "login") {

            return (
                <ul className="error-pop-ups">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            < div id = "myModalLogin" className = "modal" >
                {/* Modal content */ }
                < div className = "modal-content" >
                    <span className="close-login">&times;</span>

                    <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
                        <h1 className="login-modal-header">Log in</h1>
                        {this.renderErrors()}
                        <div className={`${this.props.formType}-form`}>
                            <div className ="login-form-div">         
                                <label className="login-modal-label">
                                    <input type="text"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className={`${this.props.formType}-input`}
                                    />
                                </label>

                                <label className="login-modal-label">
                                    <input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={`${this.props.formType}-input`}
                                    />
                                </label>
                            </div>
                            <input className={`${this.props.formType}-submit`} type="submit" value="Login" />
                        </div>
                    </form>
                    
                </div >
            </div >
        )
    }
};


export default withRouter(LoginModal);
