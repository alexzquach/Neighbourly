import React, { Component } from "react";
import "../Login/Login.css";
import "../Home/Home.css";
import Header from '../Header/Header';
import logo from '../../logo.png';
import CommentList from '../CommentList/CommentList';

// New code
import {getPosts} from "../../actions/posts"
import BaseReactComponent from "../BaseReactComponent/index.js";


export default class Comments extends BaseReactComponent {
    // SERVER DATA NEEDED:
    // Get comments for a particular post from the server
    // Code below requires a call to server to get all the comments
    // Removes a comment and updates the server
    filterState({posts}){
        return {posts};
    }

    getPostComments(posts, postID){
        for (let i = 0; i < posts.length; i++) {
            if (posts[i]._id == postID) {
                return posts[i].comments
            }
        }
    }

    render() {
        // New code
        const {posts} = this.state
        const postID = this.props.location.state.postID

        console.log("Comments:", postID)
        // Get our posts from the server
        getPosts()
        console.log(posts)
        const comments = this.getPostComments(posts, postID)
        console.log(comments)

        return (
            <div className="App">

                { /* Header component with text props. */}
                <div class="mainBanner">
                    <img class="logo" alt={logo} src={logo} />
                    <text class="bannerText"><Header title="Neighbourly" /></text>
                </div>

                {/* Our comment list */}
                <CommentList comments={comments}
                    removeComment={this.removeComment}
                    post={this.props.location.state.post}
                    postID={this.props.location.state.postID}
                    adminLoggedIn={this.props.location.state.adminLoggedIn}
                />
            </div>
        );
    }
}
