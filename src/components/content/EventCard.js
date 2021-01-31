import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardHeader, Grid, IconButton, Tooltip } from '@material-ui/core';

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

import { getFormattedDate } from '../../utils/date.util'

const useStyles = makeStyles ({
  root: {
    backgroundColor: '',
    width: '100%', 
    marginBottom: 10, 
  },
  textPadding: {
    paddingLeft: 15,
  },  
  headerFont: {
    fontSize: '1.15rem'
  },
  headerActions: {
    alignSelf: "initial",
    marginTop: 0,
    marginRight: 0,
  },
  headerColor: {
    height: 10,
    backgroundColor: 'orange', 
  },
  headerIcon: {
    color: 'black',
  },
  contentDisplay: {
    display: 'flex',
    alignItems: 'center',
  }, 
  marginIcon: {
    margin: '0px 5px',
  }, 
}); 


export default function EventCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{
          title: classes.headerFont, 
          action: classes.headerActions
        }}
        className={classes.headerColor}
        action={
          <IconButton aria-label="settings" className={classes.contentDisplay}>
            <Tooltip title="Créer une alerte">
              <NotificationsActiveOutlinedIcon className={classes.headerIcon}/>
            </Tooltip>
          </IconButton>
        }
        title={props.event.title}
      />

      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {
              props.event.date ?
              <Grid item xs={6}>
                <Typography className={classes.contentDisplay}>
                  <EventOutlinedIcon className={classes.marginIcon} />
                  {getFormattedDate(props.event.date)}
                </Typography>
              </Grid>
              : ""
            }
            <Grid item xs={6}>
              <Typography className={classes.contentDisplay}>
                <QueryBuilderOutlinedIcon className={classes.marginIcon}/>
                {props.event.hour}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.contentDisplay}>
                <RoomOutlinedIcon className={classes.marginIcon}/>
                {props.event.location}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

            
      </CardActionArea>

    </Card>
  );
}