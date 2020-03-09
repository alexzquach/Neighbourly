/*  Full Queue component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import Header from '../Header/Header';
import CommentForm from '../CommentForm/CommentForm'
import { Link } from 'react-router-dom';
import "../Home/Home.css";
import logo from '../../logo.png';

class AddComment extends React.Component {

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
                    <h3 class="subBannerLabel"><text class="bannerText">Add a Comment</text></h3>
                    <Link to={{
                        pathname: './Comments', state: {
                            comments: this.props.location.state.comments, post: this.props.location.state.post, postID: this.props.location.state.postID
                        }
                    }}>
                        { /* This element will link the URL path to home page */}
                        <button class="subBannerButton">
                            Go Back
            </button>
                    </Link>
                </div>

                { /* Form to input comment information. */}
                <CommentForm
                    comments={this.props.location.state.comments}
                    postID={this.props.location.state.postID}
                    post={this.props.location.state.post}
                />
            </div>
        );
    }
}

export default AddComment;
