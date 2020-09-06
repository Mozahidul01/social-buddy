import React from 'react';
import './PostContainer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Posts from '../Posts/Posts';
import { Container } from '@material-ui/core';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <Container maxWidth="md">
                {
                    posts.map(post => <Posts post ={post}></Posts>)
                }
            </Container>
        </div>
    );
};

export default Home;