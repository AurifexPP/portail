import React from 'react';
import Grid from '@material-ui/core/Grid';
import CrewCards from './CrewCards'
import Content from '../Content'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    containerSize: {
      overflowX: "hidden"
    },
}); 

const crews = [
  {
    title: "Calembour", 
    description: "L'équipage calembour fournit des mauvais jeux de mots, si besoin...",
    members: "10",
    category: "Géographique",
    membership: true
  },
  {
    title: "Calembour", 
    description: "L'équipage calembour fournit des mauvais jeux de mots, si besoin...",
    members: "10",
    category: "Thématique",
    membership: false
  },
  {
    title: "Calembour", 
    description: "L'équipage calembour fournit des mauvais jeux de mots, si besoin...",
    members: "10",
    category: "Projet",
    membership: false
  },
  {
    title: "Calembour", 
    description: "L'équipage calembour fournit des mauvais jeux de mots, si besoin...",
    members: "5",
    category: "Projet",
    membership: true
  },
  {
    title: "Calembour", 
    description: "L'équipage calembour fournit des mauvais jeux de mots, si besoin...",
    members: "10",
    category: "Thématique",
    membership: false
  },
]


export default function AutoGrid() {
  
  const classes = useStyles(); 

  return (

    <Content>
      
      <Grid className={classes.containerSize}
        container
        direction="row"
        alignItems="center"
        alignContent="flex-start"
        justify="flex-start"
        spacing={2}
      >
        {crews.map((crew) => (
          <Grid item xs={6} md={4} lg={3} xl={2}>
              <CrewCards crew={crew} />
          </Grid>
        ))}
      </Grid>
    </Content>
  );
}



