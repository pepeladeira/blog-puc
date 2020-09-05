import React, { useEffect, useState } from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import './BlogComment.css';


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

    //

    const imgUrl = `https://material-ui.com/static/images/avatar/${comments.id}.jpg`;

    return (
        <div className="comment-section">
            <h3>Comments on this post: {comments.length}</h3>
            {
                comments.map(comm => {
                    return <div>
                                <Paper style={{ padding: "40px 20px" }}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                    <Avatar alt="Remy Sharp" src={imgUrl} />
                                    </Grid>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <h4 style={{ margin: 0, textAlign: "left" }}>{comm.name}</h4>
                                        <p style={{ textAlign: "left", color: "gray" }}>{comm.email}</p>
                                        <p style={{ textAlign: "left" }}>{comm.body}</p>
                                    </Grid>
                                    </Grid>
                                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                                </Paper>
                    </div>
                    
                    
                })
            }
        </div>
    );
};

export default BlogComment;