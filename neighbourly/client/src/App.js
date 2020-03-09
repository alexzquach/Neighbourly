/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import Home from './react-components/Home/Home';
import AddPost from './react-components/AddPost/AddPost';
import UserTable from './react-components/UserTable/UserTable';
import Comments from './react-components/Comments/Comments';
import AddComment from './react-components/AddComment/AddComment';
import UserInformation from './react-components/UserInformation/UserInformation'
import Report from './react-components/Report/Report'
import { readCookie } from "./actions/user";
import BaseReactComponent from './react-components/BaseReactComponent';

class App extends BaseReactComponent {

    // MOCK / HARDCODED DATA

    filterState({ currentUser }) {
        return { currentUser };
    }

    constructor(props) {
        super(props);
        readCookie();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */}
                        { /* Each Route below shows a different component depending on the exact path in the URL  */}
                        <Route exact path='/' render={() => (
                            <Home
                            />)
                        } />
                        <Route exact path='/AddPost' component={AddPost} />
                        <Route exact path='/UserTable' component={UserTable} />
                        <Route exact path='/Comments' component={Comments} />
                        <Route exact path='/AddComment' component={AddComment} />
                        <Route exact path='/UserInformation' component={UserInformation} />
                        <Route exact path='/Report' component={Report} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
