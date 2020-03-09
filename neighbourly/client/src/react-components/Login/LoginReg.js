import React from "react";
import Popup from "reactjs-popup";
import Login from "./LoginForm";
import Signup from './SignupForm'
import "./Login.css";

import { getState } from "statezero";




class LoginReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignIn: true, // by default this is true
        };
    }

    displaySignIn() {
        this.setState({
            showSignIn: true

        });
    }

    displayRegister() {
        this.setState({
            showSignIn: false
        });
    }

    render() {
        const showSignIn = this.state.showSignIn;

        let targetForm;
        if (showSignIn) {
            targetForm = <Login ></Login>;
        } else {
            targetForm = <Signup></Signup>;
        }

        // NOTE: We are aware that inline styling is not good practice.
        //       However, we cannot style the imported Popup using the external way
        //       as giving it a class name is less in priority than the inline styles the import creates.
        //       Hence we are forced to resort to inline styling for this particular component.
        const modalStyling = {
            backgroundImage: "linear-gradient(to bottom, rgb(179, 230, 204), rgb(255, 206, 217))",
            border: "2px solid darkgray",
            boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.19)"
        }
        const outsideStyling = {
            background: "rgba(199, 84, 136, 0.2)",
            transition: "0.8s"
        }
        return (
            <Popup disabled={getState("disabled")} trigger={<button class="loginRegModalButton">Log in/Register </button>}
                modal
                closeOnDocumentClick
                closeOnEscape
                class="loginPopup"
                overlayStyle={outsideStyling}
                contentStyle={modalStyling}
            >
                <div class="loginRegButtonGroup">
                    <button class="loginRegButton" onClick={() => this.displaySignIn()}>Log in...</button>
                    <button class="loginRegButton" onClick={() => this.displayRegister()}>Sign up...</button>
                </div>
                {targetForm}
            </Popup>
        );
    };
}


export default LoginReg;
