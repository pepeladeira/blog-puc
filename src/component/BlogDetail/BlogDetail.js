import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const {postID} = useParams()
    return (
        <div>
            <h3>Here is post Details {postID}</h3>
        </div>
    );
};

export default BlogDetail;