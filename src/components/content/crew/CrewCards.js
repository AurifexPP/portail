import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import calembour from '../../../image/crew-logo/logo-pp.png'
import banner from '../../../image/crew-logo/banner.jpg'

import GroupIcon from '@material-ui/icons/Group';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckIcon from '@material-ui/icons/Check';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 325,
  // },
  circleThumbnail: {
    width: 90,
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '-46px',
    left: 'calc(50% - 46px)',
    border: '1px solid #ddd',
  },
  extraMarginTop: {
    paddingTop: 50,
    position: 'relative'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  dataBoxCointainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2px 1fr',
    width: '100%'
  }
});

export default function CrewCards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardMedia
          component="img"
          alt="Fond équipage"
          image={banner}
          title="Crew Banner"
        >
        </CardMedia>


        <CardContent className={classes.extraMarginTop}>
        <img 
          className={classes.circleThumbnail}
          src={calembour}
          alt="Logo de l'équipage"
        />
          <Typography gutterBottom variant="h5" component="h2"align="center">
            {props.crew.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.crew.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <div className={classes.dataBoxCointainer} 
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          alignContent="center"
        >

        <div className={classes.iconContainer}>
          {
            props.crew.category === 'Géographique' ?
              <LocationOnOutlinedIcon /> : props.crew.category === 'Thématique' ?
              <WallpaperIcon /> : props.crew.category === 'Projet' ? 
              <EmojiObjectsOutlinedIcon /> : < HelpOutlineIcon />
          }
          <Typography variant="caption" align="center">{props.crew.category}</Typography>
          </div>

          <Divider orientation="vertical" flexItem/>

          <div className={classes.iconContainer}>
            <div>
            <GroupIcon />
            {
            props.crew.membership ? <CheckIcon /> : ''  
            }
            </div>
            <Typography variant="caption" align="center">{props.crew.members} membres</Typography>
          </div>

        </div>  
      </CardActions>
    </Card>
  );
}