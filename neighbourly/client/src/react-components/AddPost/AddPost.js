/*  Full Queue component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import Header from '../Header/Header';
import PostForm from '../PostForm/PostForm'
import { Link } from 'react-router-dom';
import "../Home/Home.css";
import logo from '../../logo.png';

class AddPost extends React.Component {

    // Each section of the Queue now has its own componenet, cleaning up the
    // JSX a lot.
    render() {
        return (
            <div className="App">

                { /* Header component with text props. */}
                <div class="mainBanner">
                    <img class="logo" alt={logo} src={logo} />
                    <text class="bannerText"><Header title="Neighbourly" /></text>
                </div>

                { /* Sub header component for posts. */}
                <div id="addAPost" class="subBannerLeft">
                    <h3 class="subBannerLabel"><text class="bannerText">Add a Post</text></h3>
                    <Link to={{ pathname: './'}}>
                        { /* This element will link the URL path to home page */}
                        <button class="subBannerButton">
                            Go Back
            </button>
                    </Link>
                </div>

                { /* Form to enter all post information. */}
                <PostForm
                />
            </div>
        );
    }
}

export default AddPost;
