import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Chip, } from '@material-ui/core';
import CrewLogo from '../../../image/crew-logo/logo-pp.png'


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
  },
  chipLabel: {
    fontWeight: 700
  },
  chipDate: {
    '&::before': {
      content: '" - "',
    }
  }
})); 


export default function UserDelegation() {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Mandats
        </Typography> 
      </CardContent>

      <CardContent>
          
        <Chip 
        className={classes.iconChip}
        variant="outlined" 
        label={
          <span>
            <span className={classes.chipLabel}>Conseil des Relations publiques</span>
            <span className={classes.chipDate}>sept. 2020 - sept. 2022</span>
          </span>
        }
        avatar={<Avatar alt="Calembour" src={CrewLogo} />}
        onClick={handleClick}
        />
        <Chip 
        className={classes.iconChip}
        variant="outlined" 
        label={
          <span>
            <span className={classes.chipLabel}>Porte-Parole</span>
            <span className={classes.chipDate}>oct. 2020 - oct. 2022</span>
          </span>
        } 
        avatar={<Avatar alt="Calembour" src={CrewLogo} />}
        onClick={handleClick}
        />
        <Chip 
        className={classes.iconChip}
        variant="outlined" 
        label={
          <span>
            <span className={classes.chipLabel}>Capitaine Eq. Calembour</span>
            <span className={classes.chipDate}>janv. 2021 - janv. 2022</span>
          </span>
        } 
        avatar={<Avatar alt="Calembour" src={CrewLogo} />}
        onClick={handleClick}
        />
    
      </CardContent>

    </Card>
  );
}