import React, { useState } from 'react';
import './comment.css'
import { useEffect } from 'react';
import CommentDetail from '../CommentDetails/CommentDetails';

const Comments = (props) => {
    const [comments, setComments] = useState([]);
 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postid}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    
    return (
        <div className="comment">
            {
                comments.map(comment => <CommentDetail comment ={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;