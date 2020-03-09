import React from 'react';
import "./Post.css";
import { Link } from 'react-router-dom';
import { getState } from "statezero";
import { deletePost } from "../../actions/posts"


class Post extends React.Component {
    /*  Common 'Lifecycle' methods 
        - constructor
        - componentDidMount
        - componentWillUnmount
    */

    constructor(props) { // When the componenet is created
        super(props)
        this.state = {
            seconds: 0
        }
    }

    validPost = (post, filters) => {
        // Checks if the given post is a valid post based on the filters selected.
        if (filters.location != null && filters.location != "Anywhere" &&
            String(post.posterLocation).trim() !== String(filters.location).trim()) {
            return false;
        }
        return true;
    }

    render() {
        const { post, filters } = this.props
        console.log(post._id)
        if (this.validPost(post, filters)) {
            if (!getState("adminLoggedIn")) {
                return (
                    <li>
                        {/*Our post div*/}
                        <div class="postMain" >
                            {/* Header for the post */}
                            <div class="postTitle">{post.postTitle}</div>
                            <div class="postDifficulty">{post.postDifficulty} / 5</div>
                            {/* Content of the post */}
                            <div class="postContent">
                                {post.jobDescription}
                            </div>
                            {/* Information of the poster/post. */}
                            <ul class="postInfoList">
                                <li class="postInfoItem">{post.posterName}</li>
                                <li class="postInfoItem">{post.posterLocation}</li>
                                <li class="postInfoItem">{post.taskDate}</li>
                            </ul>
                            <div class="buttonSection">
                                {/* NOT DONE, need to pass in posts properly */}
                                <Link to={
                                    {
                                        pathname: './Comments', state: {
                                            post: post, postTitle: post.postTitle, postDifficulty: post.postDifficulty, jobDescription: post.jobDescription,
                                            posterName: post.posterName,
                                            posterLocation: post.posterLocation, taskDate: post.taskDate, comments: post.comments,
                                            postID: post._id
                                        }
                                    }}
                                > { /* This element will link the URL path to /queue */}

                                    <button class="generalButton">
                                        Comments
                                        </button>
                                </Link>

                                <Link to={{ pathname: './Report', state: { postNum: post._id } }}>
                                    <button class="generalButton">Report
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </li>
                )
            } else {
                return (
                    <li>
                        {/*Our post div*/}
                        <div class="postMain" >
                            {/* Header for the post */}
                            <div class="postTitle">{post.postTitle}</div>
                            <div class="postDifficulty">{post.postDifficulty} / 5</div>
                            {/* Content of the post */}
                            <div class="postContent">
                                {post.jobDescription}
                            </div>
                            {/* Information of the poster/post. */}
                            <ul class="postInfoList">
                                <li class="postInfoItem">{post.posterName}</li>
                                <li class="postInfoItem">{post.posterLocation}</li>
                                <li class="postInfoItem">{post.taskDate}</li>
                            </ul>
                            {/* Delete button if the user has access. */}
                            <div class="buttonSection">

                                <Link to={
                                    {
                                        pathname: './Comments', state: {
                                            post: post, postTitle: post.postTitle, postDifficulty: post.postDifficulty, jobDescription: post.jobDescription,
                                            posterName: post.posterName,
                                            posterLocation: post.posterLocation, taskDate: post.taskDate, comments: post.comments,
                                            postID: post._id
                                        }
                                    }}
                                > { /* This element will link the URL path to /queue */}
                                    <button class="generalButton">
                                        Comments
                                    </button>
                                </Link>

                                <Link to={{ pathname: './Report', state: { postNum: post._id } }}>
                                    <button class="generalButton">Report
                                    </button>
                                </Link>
                                <button class="generalButton" onClick={() => { deletePost(post._id) }}>Delete
                                </button>
                            </div>
                        </div>
                    </li>
                )
            }
        } else {
            return (null);
        }
    }
}

export default Post;
