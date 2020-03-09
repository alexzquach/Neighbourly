import React from 'react';
import "../PostForm/PostForm.css";
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import "../Home/Home.css";
import Header from '../Header/Header';
import YourPostList from '../YourPostList/YourPostList';
import "./Profile.css";
import BaseReactComponent from "../BaseReactComponent/index.js";
import { getState } from "statezero";


class UserInformation extends BaseReactComponent{
    /*  Common 'Lifecycle' methods 
        - constructor
        - componentDidMount
        - componentWillUnmount
    */

    constructor(props) { // When the componenet is created
        super(props)
    }

    filterState({currentUser, posts}){
        return {currentUser, posts};
	}

    render() {
        const {currentUser, posts} = this.state
        console.log(posts)
        let userPosts = []
        let adminStatus = ''

        if (getState("someoneLoggedIn")) {
            for (let j = 0; j < posts.length; j++) {
                if (posts[j].posterName === currentUser.name) {
                    userPosts.push(posts[j])
                }
            }

            if (currentUser.isAdmin === true) {
                adminStatus = '(Website Admin)'
            }

            return (

                <div className="App">

                    { /* Header component with text props. */}
                    <div class="mainBanner">
                        <img class="logo" alt={logo} src={logo} />
                        <text class="bannerText"><Header title="Neighbourly" /></text>
                    </div>

                    { /* Sub header component for posts. */}
                    <div class="subBannerLeft">
                        <h3 class="subBannerLabel"><text class="bannerText">Your Posts</text></h3>
                        <Link to={{ pathname: './' }}>
                            { /* This element will link the URL path to home page */}
                            <button class="subBannerButton" >
                                Go Back
                    </button>
                        </Link>
                    </div>

                    { /* Sub header component for filtering. */}
                    <div class="subBannerRight">
                        <h3 class="subBannerLabel"><text class="bannerText">Profile</text></h3>
                        <Link to={{ pathname: './' }}>
                            { /* This element will link the URL path to home page */}
                            <button class="subBannerButton invisible" >
                                Report
                    </button>
                        </Link>
                    </div>
                    { /* The Post List */}
                    {/* <PostList posts={this.props.ourState.posts}
            removePost={this.removePost}
            adminLoggedIn = {this.props.ourState.adminLoggedIn}
        /> */}
                    <div class="halfSection">

                        <YourPostList posts={userPosts}
                        />

                    </div>
                    <div class="halfSection">
                        <div class="profile">
                            {/*Our post div*/}
                            <img alt={logo} src={logo} />
                            <div class="name">{currentUser.name} (<span class="username">{currentUser.userName}</span>)</div>
                            <div class="userInfoItem">Has helped: <span class="givingHelp">{currentUser.helped}</span> person(s)</div>
                            <div class="userInfoItem">Was helped by: <span class="gettingHelp">{currentUser.gottenHelped}</span> person(s)</div>
                            <div class="userInfoItem">Help ratio: <span class="helpRatio"><span class="helping">{currentUser.helped / currentUser.gottenHelped}</span>:<span class="helped">1</span></span> person(s)</div>
                            <div class="userInfoItem">Phone #: <span class="phoneNumber">{currentUser.phone}</span> </div>
                            <div class="userInfoItem"><span class="phoneNumber">{adminStatus}</span></div>
                        </div>
                    </div>
                </div>
            )
        }
    //}
    {/* IF NO ONE IS LOGGED IN, WE END UP HERE */ }
    return (
        <div className="App">

            { /* Header component with text props. */}
            <div class="mainBanner">
                <img class="logo" alt={logo} src={logo} />
                <text class="bannerText"><Header title="Neighbourly" /></text>
            </div>

            { /* Sub header component for posts. */}
            <div class="subBannerFull">
                <h3 class="subBannerLabel"><text class="bannerText">Not yet signed in.</text></h3>
                <Link to={{ pathname: './' }}>
                    { /* This element will link the URL path to home page */}
                    <button class="subBannerButton" >
                        Go Back
                    </button>
                </Link>
            </div>
            <div class="noUserMessage">Please go back to the main page and log in.</div>
        </div>
        )
    }
}

export default UserInformation;
