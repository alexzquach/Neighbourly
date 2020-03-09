import React, { Component } from "react";
import "./Login.css";

import {login, updateLoginForm} from "../../actions/user"
import BaseReactComponent from "../BaseReactComponent/index.js";

export default class Login extends BaseReactComponent {
    constructor(props) {
        super(props);
    }
    //NEW LOGIN STUFF BELOW

    filterState({ loginForm}) {
        return { loginForm };
    }

    render() {
        const { loginForm } = this.state;

        const { username, password } = loginForm;

        return (
            <div>
                <div>
                    <input class="inputTextBox"
                        value={username}
                        placeholder="Enter your username..."
                        autoFocus
                        type="username"
                        name="username"
                        onChange={e => updateLoginForm(e.target)}
                    />
                </div>

                <div>
                    <input class="inputTextBox"
                        value={password}
                        placeholder="Enter your password..."
                        onChange={e => updateLoginForm(e.target)}
                        type="password"
                        name="password"
                    />
                </div>
                <button class="submitButton" type="submit" onClick={login}>
                    Login
                </button>
            </div>
        );
    }
}
