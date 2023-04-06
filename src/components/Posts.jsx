import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h4>All posts are here: {posts.length}</h4>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;