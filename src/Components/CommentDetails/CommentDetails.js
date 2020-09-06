import React from 'react';
import './CommentDetails.css'
import img from '../img/comment-img.jpg'

const CommentDetail = (props) => {
    const {name,email, body} = props.comment;
    
    return (
        <div className="comment-box">
                <div className="comment-info">
                    <img src={img} alt="" className="comment-img"/>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
                <div className="comment-text">
                    <p>{body}</p>
                </div>
        </div>
    );
};
export default CommentDetail;