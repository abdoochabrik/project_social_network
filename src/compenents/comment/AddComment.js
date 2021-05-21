import React, {useState} from 'react'
import { Divider, Avatar, Grid, Paper, Button} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
function AddComment(props) {

    const [comment, setComment] = useState({
        "_id": "60a5dbzdz",
        "text": "",
        "date": null,
        "userId": null,
        "postId": null,
      })

      const handleChange  = e => {
        setComment({...comment, text : e.target.value, date : new Date()})
        
      }
      
      const submitComment = e => {
        e.preventDefault()
        props.addComment(comment)
        console.log(comment)
        setComment({...comment,
          "_id": "60a547b",
          "text": "",
          "date": null,
          "userId": null,
          "postId": null,
        })
        
      }
      const classes = useStyles();
    return (
        <div>
         
        <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <form action="" method="post">
            <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                
                    <div className="shareTop" style={{  marginTop: 10 }}>
                        <label className="pure-material-textfield-outlined">    
                            <input 
                            onChange={handleChange} 
                            name="text" 
                            placeholder="write a comment"  
                            style={{ borderRadius: 5 }}
                            value={comment.text}  />
                        </label> 
                    </div>
                   
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
                <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={submitComment} 
              className={classes.button}> 
              add comment
              </Button>
            </Grid>
              </form>
          </Grid>
        </Paper>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </div> 
    )
}

export default AddComment;