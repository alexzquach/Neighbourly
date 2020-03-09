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
                alert("Could not get Reports");
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

export const updateReportForm = field => {
    const { name, value } = field;
    setState(`reportForm.${name}`, value);
};


export const deleteReport = (reportID) => {
    // the URL for the request
    const url = "/reports/".concat(reportID);

    // Since this is a GET request, simply call fetch on the URL
    // Same thing, change http method
    fetch(url, {method: "delete"})
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not delete report");
            }
        })
        .then(json => {
            setState("reports", json.reports);
        })
        .catch(error => {
            console.log(error);
        });
};

export const addReport = () => {
    // the URL for the request
    const url = "/reports";

    // The data we are going to send in our request
    const report = getState("reportForm");

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(report),
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
            setState("reportForm", { reporterName: "", postNumber: "", complaint: ""});
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                setState("message", {
                    body: "Success: Added a Report.",
                    type: "success"
                });
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                setState("message", {
                    body: "Error: Could not add Report.",
                    type: "error"
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};