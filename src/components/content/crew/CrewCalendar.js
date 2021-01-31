import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import EventCard from '../EventCard'; 



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

const events = [
  {
    title: "Réunion Equipage Calembourt",
    date: new Date(),
    hour: "19h30",
    location: "Discord - Salon Julia Réda",
  },
  {
    title: "Réunion Equipage Calembourt",
    date: new Date(),
    hour: "19h30",
    location: "Discord - Salon Julia Réda",
  },
]

export default function CrewCalendar() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Agenda
        </Typography> 
      </CardContent>

      <Divider /> 
      
      <CardContent>
        {events.map((event, index) => 
          <EventCard key={index} event={event}/>
        )}
      </CardContent>
    </Card>
  );
}