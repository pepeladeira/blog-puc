import React, { useEffect, useState } from 'react';
import './BlogComment.css';
import BlogCommentDetail from '../BlogCommentDetail/BlogCommentDetail';


const BlogComment = (props) => {
    const postID = props.postid
    
    // finding comment for the post id
    
    const[comments, setComments] = useState ([])

    const commentsUrl = `https://jsonplaceholder.typicode.com/comments/?postId=${postID}`;

    useEffect(() => {
        fetch(commentsUrl)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);


    return (
        <div className="comment-section">
            <h3>Comments on this post: {comments.length}</h3>
            {
                comments.map(comm => <BlogCommentDetail comments={comm} key={comm.id}></BlogCommentDetail>)
            }
        </div>
    );
};

export default BlogComment;