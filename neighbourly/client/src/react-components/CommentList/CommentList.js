import React from 'react';
import { uid } from 'react-uid';
import "./CommentList.css";
import Comment from '../Comment/Comment'
import { Link } from 'react-router-dom';
import "../Home/Home.css";
import "../Comment/Comment.css";

// New code
import {getPosts} from "../../actions/posts"
import BaseReactComponent from "../BaseReactComponent/index.js";

/* Component for the List of Comments */
class CommentList extends BaseReactComponent{
    filterState({posts}){
        return {posts};
    } 
    
    render() {
        const { comments, removeComment, post, adminLoggedIn } = this.props

    // New code
    const {posts} = this.state

    // Get our posts from the server
    getPosts()

        return (
            <div>
                { /* Sub header component for comments. */}
                <div class="subBannerFull">
                    <h3 class="subBannerLabel"><text class="bannerText">{post.postTitle}</text></h3>
                    {/* BACK BUTTON */}
                    <Link to={{ pathname: './' }}>
                        <button class="subBannerButton">
                            Back
                        </button>
                    </Link>
                </div>

                {/* OUR Comments */}
                <div class="posterComment">
                    {/* Header for the comments */}
                    <div class="postDifficulty">{post.postDifficulty} / 5</div>
                    {/* Content of the comments */}
                    <div class="postContent">
                        {post.jobDescription}
                    </div>
                    {/* Information of the commenter/comment. */}
                    <ul class="postInfoList">
                        <li class="postInfoItem">{post.posterName}</li>
                        <li class="postInfoItem">{post.posterLocation}</li>
                        <li class="postInfoItem">{post.taskDate}</li>
                    </ul>

                    {/* our add comment feature */}
                    <div class="buttonSection">
                        <Link to={{ pathname: './AddComment', state: { comments: this.props.comments, post: this.props.post,  postID: this.props.postID  } }}>
                            <button class="generalButton">
                                Add Comment
                            </button>
                        </Link>
                    </div>

                </div>
                {/* OUR COMMENT UL */}
                <div>
                    <ul class="commentSection">
                        {comments.map((comment) => {
                            return (
                                <Comment key={uid(comment) /* unique id required to help React render more efficiently when we delete students. */}
                                    comment={comment}
                                    postID={post._id}
                                    removeComment={removeComment}
                                    adminLoggedIn={adminLoggedIn}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div >

        )
    }
}

export default CommentList;