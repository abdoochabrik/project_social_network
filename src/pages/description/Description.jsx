import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Login from '../login/Login'
import { Link } from 'react-router-dom';

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

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>


      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Social Network
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                  
           <Link to ="../../login/Login"><MenuItem onClick={handleClose}>Login</MenuItem></Link> 
           <Link to="../../register/Register" >    <MenuItem onClick={handleClose}>Sign up</MenuItem></Link> 
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      
      <div className="login">
          <div className="loginWrapper">

              <div className="loginRight">
                    <form className="loginBox" >  
                        <button className="loginCreate"  >how to  use  social network</button>
                        <h5>click on icon above</h5>
                        <h5>if you  have an account click on login</h5>
                        <h5>if you don't have an account click on Sign up</h5>
                        <h5>after finishing you can invite your friends, follow them, share posts, start conversations ...</h5>
                    </form>
              </div>
          </div>
      </div>
      
    </div>
  );
}
