import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions, Divider, } from '@material-ui/core';

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


export default function CrewCode() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Code de fonctionnement
        </Typography> 
      </CardContent>

      <Divider /> 

      <CardContent>
        <Typography variant="h6">
          Article 1
        </Typography>
        <Typography variant="body1">
          Il est organisé par les Pirates selon les articles 6 et suivants des statuts un équipage ayant pour dénomination : Équipage Calembour. <br/>
        </Typography>
        <Typography variant="h6">
          Article 2
        </Typography>
        <Typography variant="body1">
          Cet équipage a le champ d'action suivant : thématique
          Le champ d'action est décrit de la manière suivante :
            - Fournit au besoin un jeu de mots
        </Typography>
        <Typography variant="h6">
          Article 3
        </Typography>  
        <Typography variant="body1">
          L'équipage peut présenter devant l'Assemblée permanente de manière annuelle ou ponctuelle une demande de fonds pour financer ses activités. <br/>
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" className={classes.buttonJoin} >
          Afficher le code
        </Button>
      </CardActions>
      

    </Card>
  );
}