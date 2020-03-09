import React from 'react';
import { uid } from 'react-uid';
import "../PostForm/PostForm.css";
import YourPost from '../YourPost/YourPost'

/* Component for the List of Students */
class YourPostList extends React.Component {
    render() {
        let { posts } = this.props

        /* Our student list.  We use the state to iterate through the 
           student list and make an <li> for each one. */
        return (
            <ul class="postList">
                {/* .MAP creates as problem as it generates a new post array, so our original post array will never be edited */}
                {posts.map((post) => {
                    return (
                        <YourPost key={uid(post) /* unique id required to help React render more efficiently when we delete students. */}
                            post={post}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default YourPostList;