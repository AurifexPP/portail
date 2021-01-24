import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import GroupIcon from '@material-ui/icons/Group'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  withoutMarge: {
    paddingTop: 4, 
    paddingBottom: 4,
  },
  fullList: {
    width: 'auto',
  },
});

export default function RightDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(state)
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.withoutMarge}>
        <ListItem key={'Mon Profil'}>
        <ListItemIcon><Avatar>A</Avatar></ListItemIcon>
        <ListItemText primary={'Aura'} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key={'0'} component={Link} to="/user">
            <ListItemIcon><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={'Mon profil'} />
        </ListItem>
        <ListItem button key={'1'}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary={'Mes équipages'} />
        </ListItem>
        <ListItem button key={'2'}>
            <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
            <ListItemText primary={'Mes projets'} />
        </ListItem>
        
      </List>

      <Divider />

      <List>
          <ListItem button key={'1'}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary={'Mes paramètres'} />
          </ListItem>
          
      </List>

      <Divider />

      <List>
          <ListItem button key={'1'}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary={'Me déconnecter'} />
          </ListItem>
          
      </List>
    </div>
  );

  var anchor = 'menu'

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}> Mon espace </Button>
      <Drawer anchor='right' open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </div>
  );
}
