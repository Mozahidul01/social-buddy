import React from 'react';
import './Posts.css'
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';



const Posts = (props) => {
    const {id, title, body} = props.post;
    console.log(props.post);
    return (
        <div className="post-area">
            <Container maxWidth="md">
                <h2 className="post-tittle"> {title}</h2>
                <p className="post-details">{body}</p>
                <Link to={`/post/${id}`} className="more-link"><Button variant="contained" className="more-btn">Read More</Button></Link>
            </Container>
        </div>
    );
};

export default Posts;