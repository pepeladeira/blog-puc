import React from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

const BlogCommentDetail = (props) => {
    const {name, id, email, body} = props.comments
    console.log(props)
    const imgUrl = `https://material-ui.com/static/images/avatar/${id}.jpg`;
    
    return (
        <div>
            <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgUrl} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
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