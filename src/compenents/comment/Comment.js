import React from 'react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import Post from '../post/Post';
import {format} from "timeago.js"

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


function Comment({comment}) {
  return (
    <div>
      <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              {comment.text}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {format(comment.date)}
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </div> 
    )
}

export default Comment;
