import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge, Button, CardActions, IconButton, Tooltip, } from '@material-ui/core';
import profilepic from '../../../image/profilepic.jpg'
import profilepic2 from '../../../image/profile2.jpg'

import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  textPadding: {
    paddingLeft: 15,
  },
  iconColor: {
    color: 'orange',
  },
  iconChip: {
    marginRight: 10,
    marginBottom: 10,
  },
  avatarSize: {
    width: '80px', 
    height: '80px', 
  },
  avatarLeader: {
    width: '80px', 
    height: '80px', 
    border: 'solid orange'
  },
  buttonJoin: {
    marginLeft: 'auto', 
    borderRadius: '50px',
    backgroundColor: '#9500FF',
    color: 'white', 
  },
  
})); 


export default function UserDelegation() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Membres
        </Typography> 
      </CardContent>

      <CardContent>

      <Tooltip title="Aura" arrow>
        <IconButton>    
          <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<StarIcon fontSize="large" className={classes.iconColor} />}
        >
          <Avatar alt="Aura" src={profilepic} className={classes.avatarLeader} />
        </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="FlowDread" arrow>
        <IconButton>    
          <Avatar alt="FlowDread" src={profilepic2} className={classes.avatarSize} />
        </IconButton>
      </Tooltip>
      <Tooltip title="FlowDread" arrow>
        <IconButton>    
          <Avatar alt="FlowDread" src={profilepic2} className={classes.avatarSize} />
        </IconButton>
      </Tooltip>
      <Tooltip title="FlowDread" arrow>
        <IconButton>    
          <Avatar alt="FlowDread" src={profilepic2} className={classes.avatarSize} />
        </IconButton>
      </Tooltip>
      <Tooltip title="FlowDread" arrow>
        <IconButton>    
          <Avatar alt="FlowDread" src={profilepic2} className={classes.avatarSize} />
        </IconButton>
      </Tooltip>

      </CardContent>

      <CardActions>
        <Button variant="contained" className={classes.buttonJoin} >
          Rejoindre l'équipage
        </Button>
      </CardActions>

    </Card>
  );
}