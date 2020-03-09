import { getState, setState } from "statezero";

// A function to send a GET request to the web server,
//  and then loop through them and add a list element for each student.
export const getReports = () => {
    // the URL for the request
    const url = "/reports";

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
            setState("reports", json.reports);
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateCommentForm = field => {
    const { name, value } = field;
    setState(`commentForm.${name}`, value);
};


export const deleteComment = (postID, commentID) => {
    // the URL for the request
    const url = "/posts/".concat(postID).concat('/').concat(commentID);

    // Since this is a GET request, simply call fetch on the URL
    // Same thing, change http method
    fetch(url, {method: "delete"})
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not delete comment");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            console.log("after comment delete:", json)
            setState("posts", json.posts);
        })
        .catch(error => {
            console.log(error);
        });
};

export const addComment = (postID) => {
    // the URL for the request
    const url = '/posts/'.concat(postID);

    // The data we are going to send in our request
    const comment = getState("commentForm");

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(comment),
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
            setState("commentForm", { posterName: "", comment: "", date: ""});
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                setState("message", {
                    body: "Success: Added a Comment.",
                    type: "success"
                });
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                setState("message", {
                    body: "Error: Could not add Comment.",
                    type: "error"
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};