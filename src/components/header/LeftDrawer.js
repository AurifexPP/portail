import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SchoolIcon from '@material-ui/icons/School'
import GroupIcon from '@material-ui/icons/Group'
import StorageIcon from '@material-ui/icons/Storage'
import HelpIcon from '@material-ui/icons/Help'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { IconButton } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function LeftDrawer() {
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={'Accueil'} component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Accueil'} />
          </ListItem>
      </List>

      <Divider />

      <List>    
          <ListItem button key={'1'}>
          <ListItemIcon><HowToVoteIcon /></ListItemIcon>
            <ListItemText primary={'Décider'} />
          </ListItem>
          <ListItem button key={'2'}>
          <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
            <ListItemText primary={'Débattre'} />
          </ListItem>
          <ListItem button key={'3'}>
            <ListItemIcon><RecordVoiceOverIcon /></ListItemIcon>
            <ListItemText primary={'Discuter'} />
          </ListItem>
          <ListItem button key={'4'}>
          <ListItemIcon><CompareArrowsIcon /></ListItemIcon>
            <ListItemText primary={'Déléguer'} />
          </ListItem>
                  
      </List>

      <Divider />

      <List>
          <ListItem button key={''}>
            <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary={'Conseils'} />
          </ListItem>
          <ListItem button key={'1'} component={Link} to="/crews">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={'Equipages'} />
          </ListItem>
          <ListItem button key={'2'}>
          <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
            <ListItemText primary={'Projets'} />
          </ListItem>
          <ListItem button key={'3'}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary={'Tutoriel'} />
          </ListItem>
          <ListItem button key={'4'}>
            <ListItemIcon><FolderIcon /></ListItemIcon>
            <ListItemText primary={'Sources'} />
          </ListItem>
          <ListItem button key={'5'}>
            <ListItemIcon><StorageIcon /></ListItemIcon>
            <ListItemText primary={'Archives'} />
          </ListItem>
      </List>

      <Divider />

      <List>
          <ListItem button key={'1'}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary={'Aide'} />
          </ListItem>
          
      </List>
    </div>
  );

  var anchor = 'menu'

  return (
    <div>
      <IconButton onClick={toggleDrawer(anchor, true)}>
        <MenuIcon/>
      </IconButton>
      <Drawer anchor='left' open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </div>
  );
}
