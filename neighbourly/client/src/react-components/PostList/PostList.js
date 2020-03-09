import React from 'react';
import { uid } from 'react-uid';
import "./PostList.css";
import Post from '../Post/Post'

// New code
import { getPosts } from "../../actions/posts"
import BaseReactComponent from "../BaseReactComponent/index.js";

/* Component for the List of Students */
class PostList extends BaseReactComponent {
    // New code
    filterState({ posts }) {
        return { posts };
    }

    sortByDifficulty = (posts) => {
        // Returns the posts sorted by difficulty.
        const sortedPosts = posts.concat();
        sortedPosts.sort((p1, p2) => {
            if (p1.postDifficulty < p2.postDifficulty) {
                return -1;
            } else if (p1.postDifficulty > p2.postDifficulty) {
                return 1;
            }
            return 0;
        });
        return sortedPosts
    }

    sortByPosterName = (posts) => {
        // Returns the posts sorted by the poster names.
        const sortedPosts = posts.concat();
        sortedPosts.sort((p1, p2) => {
            if (p1.posterName < p2.posterName) {
                return -1;
            } else if (p1.posterName > p2.posterName) {
                return 1;
            }
            return 0;
        });
        return sortedPosts
    }

    render() {
        let { filters } = this.props

        // New code
        const { posts } = this.state
        // Get our posts from the server
        getPosts()

        // Sorts the posts by the given sorting method (or just leaves it as is).
        let newPosts = posts.concat();
        if (filters.sort != null && filters.sort === "Difficulty") {
            newPosts = this.sortByDifficulty(posts);
        } else if (filters.sort != null && filters.sort === "Poster Name") {
            newPosts = this.sortByPosterName(posts);
        }

        /* Our student list.  We use the state to iterate through the 
           student list and make an <li> for each one. */
        return (
            <ul class="postList">
                {/* .MAP creates as problem as it generates a new post array, so our original post array will never be edited */}
                {newPosts.map((post) => {
                    return (
                        <Post key={uid(post) /* unique id required to help React render more efficiently when we delete students. */}
                            post={post}
                            filters={filters} />
                    )
                })}
            </ul>
        )
    }
}

export default PostList;