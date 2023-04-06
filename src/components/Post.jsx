import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div style={{padding: '10px', margin: '10px', border: '2px solid red', borderRadius: '10px'}}>
            <h3>{title}</h3>
            <button><Link to={`/postDetails/${id}`}>Details</Link></button>
        </div>
    );
};

export default Post;