import React from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import fakeImg from '../../fakeImg';

const BlogCommentDetail = (props) => {
    const {name, email, body} = props.comments
    const comment = props.totalComment

    // adding image from Fake img
    const commentImg = fakeImg.slice(0, comment);    

    let imgUrl;

    commentImg.map( img => {
        // console.log(img.url)
        return imgUrl = img.url;
        
    })


    return (
        <div>
            <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                    <Avatar alt="Remy Sharp" src={imgUrl} />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
                        <p style={{ textAlign: "left", color: "gray" }}>{email}</p>
                        <p style={{ textAlign: "left" }}>{body}</p>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </Paper>
        </div>
    );
};

export default BlogCommentDetail;