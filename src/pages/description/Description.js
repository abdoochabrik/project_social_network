import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const styles = {
    heroContainer: {
      height: 800,
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg3.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };

function Description() {
    

const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Social network app
          </Typography>
          <Link to="/login" style={{textDecoration: 'none'}} ><Button
           style={{color:'white'}}>Login</Button></Link>
        </Toolbar>
      </AppBar>
      <div>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="right"
            style={styles.heroContainer} >
            <Grid>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh' }}
                    >
                        <Grid item xs={4}> 
                            <Paper style={{ background: 'transparent' , boxShadow: 'none'}} >
                                    <p style={{ opacity :'1', fontWeight :'bolder', fontSize:'1.5rem', color :'white'}}>
                                        A social network app is a network of individuals who meet online to communicate by posting information and images,
                                        leaving comments, or sending messages
                                    </p>
                            </Paper>

                                  
                        </Grid>  
                </Grid>
            </Grid>
        </Grid> 
         </div>
    </div>
  );

}

export default Description
