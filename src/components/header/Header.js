import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'


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
  headerPosition: {
    position: 'sticky',
    top: '0',
    zIndex: '3',
    backgroundColor: 'white'
  }, 
}));

export default function ButtonAppBar() {

  const classes = useStyles();

  return (
    <div className={`${classes.root} ${classes.headerPosition}`}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <LeftDrawer />
          <Typography variant="h6" className={classes.title}>
            Portail du Parti Pirate
          </Typography>
          <RightDrawer />
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

