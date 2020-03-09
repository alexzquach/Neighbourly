import React from 'react';
import { Link } from 'react-router-dom';
import "./PostForm.css";

// New code
import {addPost, updatePostForm} from "../../actions/posts"
import BaseReactComponent from "../BaseReactComponent/index.js";

/* Component for the Student Form */
class PostForm extends BaseReactComponent {
     // this.state
    filterState({ postForm}) {
        return { postForm };
    }


    render() {

        const { postForm } = this.state;

        const { posterName, posterLocation, postTitle, postDifficulty, taskDate, jobDescription } = postForm;


        return (
            <div>

                { /* Inputs to add student */}
                <input class="inputTextBox"
                    name='posterName'
                    value={posterName}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Name" />

                <input class="inputTextBox"
                    name='posterLocation'
                    value={posterLocation}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Job Location" />

                <input class="inputTextBox"
                    name='postTitle'
                    value={postTitle}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Job Title" />

                <input class="inputTextBox"
                    name='postDifficulty'
                    value={postDifficulty}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Job Difficulty" />

                <input class="inputTextBox"
                    name='taskDate'
                    value={taskDate}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Completion date" />

                <input class="inputTextBox"
                    name='jobDescription'
                    value={jobDescription}
                    onChange={e => updatePostForm(e.target)}
                    type="text"
                    placeholder="Job Description (250 Chars. Max)" />

                <Link to={{ pathname: './' }}>
                    <button class="submitButton add" onClick={addPost}>
                        Submit Post
	                </button>
                </Link>
            </div>
        )
    }
}

export default PostForm;

