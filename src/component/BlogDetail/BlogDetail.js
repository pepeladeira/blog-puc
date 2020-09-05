import React, { useEffect, useState } from 'react';
import BlogComment from '../BlogComment/BlogComment';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './BlogDetail.css';

const BlogDetail = () => {
    const {postID} = useParams();
    const postDetailUrl = `https://jsonplaceholder.typicode.com/posts/${postID}`;

    const [post, setPost] = useState({})

    // adding post details using post id.
    useEffect(() => {
        fetch(postDetailUrl)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div className="post-container">
            <Box p={4} boxShadow={2}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </Box>
            <BlogComment postid={postID}></BlogComment>
        </div>
    );
};

export default BlogDetail;