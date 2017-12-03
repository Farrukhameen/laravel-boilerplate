import React from 'react';
import propTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
//
// const styles = theme => ({
//   root: {
//     marginTop: theme.spaing.unit * 3,
//     width: 100%,
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton:{
//     marginLeft: -12,
//     marginRight: 20,
//   }
// });

function Header(props){
  const {classes} = props;
  return(
    // <div className={classes.root}>
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Boilerplate Laravel Material-ui React Scss
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
