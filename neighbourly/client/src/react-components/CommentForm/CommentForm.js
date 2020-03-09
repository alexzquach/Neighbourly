import React from 'react';
import { Link } from 'react-router-dom';
import "../PostForm/PostForm.css";

import {addComment, updateCommentForm} from "../../actions/comments"
import BaseReactComponent from "../BaseReactComponent/index.js";

/* Component for the Comment Form */
class CommentForm extends BaseReactComponent {

    filterState({ commentForm}) {
        return { commentForm };
    }

    render() {
        const { commentForm } = this.state;

        const { posterName, comment, date } = commentForm;

        return (
            <div>

                { /* Inputs to add a comment */}
                <input class="inputTextBox"
                    name='posterName'
                    value={posterName}
                    onChange={e => updateCommentForm(e.target)}
                    type="text"
                    placeholder="Name" />

                <input class="inputTextBox"
                    name='comment'
                    value={comment}
                    onChange={e => updateCommentForm(e.target)}
                    type="text"
                    placeholder="Comment" />

                <input class="inputTextBox"
                    name='date'
                    value={date}
                    onChange={e => updateCommentForm(e.target)}
                    type="text"
                    placeholder="Date" />

                <Link to={{ pathname: './Comments', state: { comments: this.props.comments, post: this.props.post,  postID: this.props.postID} }}>
                    <button class="submitButton add" onClick={() => {addComment(this.props.postID)}}>
                        Submit Comment
	                </button>
                </Link>
            </div>
        )
    }
}

export default CommentForm;

