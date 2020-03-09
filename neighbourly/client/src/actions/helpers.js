import { setState } from "statezero";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components. All component classes that read
// from these state paths must extend BaseReactComponent class.
//
// - currentUser state path is used by the root App component
// - studentForm and message state paths are used by the StudentForm component
// - studentList state path is used by the StudentList component
export const setEmptyState = () => {
    setState("adminLoggedIn", false)
    setState("someoneLoggedIn", false)
    setState("currentUser", null);
    setState("disabled", false)
    setState("loginForm", { username: "", password: "" });
    setState("signupForm", {name: "", userName: "", password: "", confirmPassword: "", location: "", phone: ""})
    setState("postForm", { posterName: "", posterLocation: "", postTitle: "", postDifficulty: "", taskDate: "", jobDescription: "" });
    setState("reportForm", { reporterName: "", postNumber: "", complaint: ""});
    setState("commentForm", { posterName: "", comment: "", date: ""});
    setState("posts", []);
    setState("reports", []);
    setState("users", [])
};