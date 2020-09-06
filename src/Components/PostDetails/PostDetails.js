import React from 'react';
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import { Container } from '@material-ui/core';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    
    return (
        <div>
            <Container maxWidth="md" className="pd-container">
                <h2 className="pd-tittle">{post.title}</h2>
                <p className="pd-body">{post.body}</p>
                <Comments postid ={postId}></Comments>
            </Container>
        </div>
    );
};

export default PostDetail;