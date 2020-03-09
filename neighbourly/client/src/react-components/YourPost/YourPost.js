import React from 'react';
import "../PostForm/PostForm.css";
// import { Link } from 'react-router-dom';

class YourPost extends React.Component {
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
        const { post } = this.props

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
                </div>
            </li>
        );
    }

}

export default YourPost;
