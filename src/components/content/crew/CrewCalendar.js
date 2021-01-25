import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Badge, Button, CardActionArea, CardActions, Divider, IconButton, Tooltip, } from '@material-ui/core';
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
  eventCard: {
    borderRadius: 5,
    backgroundColor: 'grey', 
    padding: 5
  },  
  eventTypo: {
    margin: 5, 
    padding: 5
  }
})); 


export default function UserDelegation() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Calendrier
        </Typography> 
      </CardContent>

      <Divider /> 

      <CardActionArea className={classes.eventCard} >

      <Typography variant="body1" className={classes.eventTypo}>
        Réunion 23/02/21
      </Typography>

      </CardActionArea>

      

    </Card>
  );
}