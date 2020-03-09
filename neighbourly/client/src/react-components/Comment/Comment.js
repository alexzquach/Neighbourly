import React from 'react';
import "../PostForm/PostForm.css";
import "./Comment.css";
import { getState } from "statezero";
import {deleteComment} from "../../actions/comments"
import { get } from 'https';

class Comment extends React.Component {
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

    render() {
        const { comment, postID, removeComment, adminLoggedIn } = this.props

        if (getState("adminLoggedIn")) {
            return (
                <li>
                    {/*Our comment div*/}
                    <div class="commentMain" >
                        {/* Information about each comment */}
                        <div class="commenterName">{comment.posterName}</div>
                        <div class="commentContent">{comment.comment}</div>
                        <div class="commentDate">Posted date: {comment.date}</div>
                        <div class="buttonSection">
                            <button class="generalButton" onClick={
                                () => {deleteComment(postID, comment._id)}
                            }>Delete
                  </button>
                        </div>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    {/*Our comment div*/}
                    <div class="commentMain" >
                        {/* Information about each comment */}
                        <div class="commenterName">{comment.posterName}</div>
                        <div class="commentContent">{comment.comment}</div>
                        <div class="commentDate">Posted date: {comment.date}</div>
                    </div>
                </li>
            )
        }

    }
}

export default Comment;