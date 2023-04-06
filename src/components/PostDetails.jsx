import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, title, body} = postDetails;
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(-1)
    }
    return (
        <div style={{padding: '10px', margin: '10px', border: '2px solid red', borderRadius: '10px'}}>
            <h5>Post Id no. {id}</h5>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={backHandler}>Back to Home</button>
        </div>
    );
};

export default PostDetails;