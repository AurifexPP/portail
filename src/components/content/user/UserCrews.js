import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Chip, } from '@material-ui/core';
import CrewLogo from '../../../image/crew-logo/logo-pp.png'

import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  textPadding: {
    paddingLeft: 15,
  },
  iconColor: {
    color: 'black', 
  },
  iconChip: {
    marginRight: 10,
    marginBottom: 10,
  }
})); 


export default function UserDelegation() {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography variant="h6">
          Équipages
          </Typography> 
      </CardContent>

      <CardContent>
          
        <Chip 
        className={classes.iconChip}
        variant="outlined" 
        label="Calembour" 
        avatar={<Avatar alt="Calembour" src={CrewLogo} />}
        onClick={handleClick}
        deleteIcon={<StarIcon className={classes.iconColor}/>}
        onDelete={handleDelete}
        />
        <Chip 
        className={classes.iconChip}
        variant="outlined" 
        label="Calembour" 
        avatar={<Avatar alt="Calembour" src={CrewLogo} />}
        onClick={handleClick}
        />
    
      </CardContent>

    </Card>
  );
}