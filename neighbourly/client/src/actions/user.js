// getState is used to get the value of a state path
// setState is used to set the value of a state path
import { getState, setState } from "statezero";
import { get } from "https";

export const getUsers = () => {
    // the URL for the request
    const url = "/users";

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get students");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            setState("users", json.users);
        })
        .catch(error => {
            console.log(error);
        });
};


export const readCookie = () => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                setState("currentUser", json.currentUser);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateLoginForm = field => {
    const { name, value } = field;
    setState(`loginForm.${name}`, value);
};


export const updateSignupForm = field => {
    const { name, value } = field;
    setState(`signupForm.${name}`, value);
};


export const register = () => {

    if (getState("signupForm").password == getState("signupForm").confirmPassword){
        const ourBody = {
            userName: getState("signupForm").userName,
            password: getState("signupForm").password,
            name: getState("signupForm").name,
            location: getState("signupForm").location,
            phone: getState("signupForm").phone,
            helped: 0,
            gottenHelped: 0,
            isAdmin: false
        }
        
        // Create our request constructor with all the parameters we need
        const request = new Request("/users", {
            method: "post",
            body: JSON.stringify(ourBody),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
    
        // Send the request with fetch()
        fetch(request)
        .then(function(res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            setState("signupForm", {name: "", userName: "", password: "", confirmPassword: "", location: "", phone: ""})
            if (res.status === 200) {
                window.alert("Registered Succesfully!  Please log in to confirm!")
                // If student was added successfully, tell the user.
                setState("message", {
                    body: "Success: Added a User.",
                    type: "success"
                });
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                setState("message", {
                    body: "Error: Could not add User.",
                    type: "error"
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }else{
        window.alert("Could not register! Passwords do not match.")
    }
   
};

export const login = () => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(getState("loginForm")),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // Probably want to set admin logged in
                return res.json();
            }
        })
        .then(json => {
            // TO DO: SET IS ADMIN BASED ON THIS INFORMATION, all works
            if (json.currentUser !== undefined) {
                setState("loginForm", {username: "", password: "" });
                setState("currentUser", json.currentUser);
                if (json.currentUser.isAdmin){
                    setState("adminLoggedIn", true)
                }
                setState("disabled", true)
                setState("someoneLoggedIn", true)
                window.alert("Logged in Sucessfully")
            }
        })
        .catch(error => {
            window.alert("Could not log in!  Wrong username or password!")
            console.log(error);
        });
};

export const logout = () => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            if (getState("someoneLoggedIn")){
                setState("currentUser", null);
                setState("someoneLoggedIn", false)
                setState("adminLoggedIn", false)
                setState("disabled", false)
                window.alert("Logged out succesfully!")
            }else{
                window.alert("Not logged in!")
            }
        })
        .catch(error => {
            console.log(error);
        });
};