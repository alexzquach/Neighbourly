import React, { Component } from "react";
import "./Login.css";

import {register, updateSignupForm} from "../../actions/user"
import BaseReactComponent from "../BaseReactComponent/index.js";

export default class Signup extends BaseReactComponent {
    filterState({ signupForm}) {
        return { signupForm };
    }

    render() {
        const { signupForm } = this.state;

        const { name, userName, password, confirmPassword, location, phone } = signupForm;


        return (
            <div>
                <div class="inputTextGroup">
                    <input class="inputTextBox" name="name" value={name} autoFocus type="email" aria-describedby="emailHelp" placeholder="Enter your name..." onChange={e => updateSignupForm(e.target)}></input>
                    <input class="inputTextBox" name="userName" value={userName} autoFocus type="username" placeholder="Enter your username..." onChange={e => updateSignupForm(e.target)}></input>

                </div>
                <div class="inputTextGroup">
                    <input class="inputTextBox" name="password" value={password} type="password" autoFocus onChange={e => updateSignupForm(e.target)} placeholder="Enter as password..."></input>
                    <input class="inputTextBox" name="confirmPassword" value={confirmPassword} type="password" onChange={e => updateSignupForm(e.target)} placeholder="Re-enter the password..."></input>

                </div>
                <div class="inputTextGroup">
                    <input class="inputTextBox" name="phone" value={phone} type="phone"  autoFocus onChange={e => updateSignupForm(e.target)} placeholder="Enter your phone number..."></input>
                    <input class="inputTextBox" name="location" value={location} type="locaton" autoFocus onChange={e => updateSignupForm(e.target)} placeholder="Enter your location..."></input>
                </div>
                <button class="submitButton" type="submit" onClick={register}>Submit </button>
            </div>
        )
    }
}
