import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import CrewLogo from '../../../image/crew-logo/logo-pp.png'
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'



import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import StorageIcon from '@material-ui/icons/Storage';




const useStyles = makeStyles({
    root: {
    //   minWidth: 275,
    },
    margin: {
        marginBottom: 10,
    },
    change: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        borderRadius: '50px',
        backgroundColor: '#9500FF',
        color: 'white',
    },
    divider: {
        height: '4px', 
        backgroundColor: "#9500FF",
        borderRadius: '50px'
    },
    iconButton: {
        marginRight: 10, 
    }
  });

export default function CrewProfile () {
    const classes = useStyles();
    
    return (

        <Card className={classes.root}>    
        
            <CardMedia
               component="img"
               alt="Crew Logo"
               image={CrewLogo}
               title="Crew Logo"
            />

            <CardContent>

              <div className={classes.margin}>
                  <Typography variant="h6" align="center">
                      Equipage Calembour
                  </Typography>
              </div>

              <div className={classes.margin}>
                  <Typography variant="subtitle1" align="center" >
                      Equipage thématique
                  </Typography>
              </div>

              <Divider className={classes.divider} />

              <List>  

                <ListItem>
                    <ListItemIcon><GroupAddIcon /></ListItemIcon>
                    <ListItemText primary={'Accès libre'} />
                </ListItem>

                <Divider />

                <ListItem button key={'1'}>
                    <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
                    <ListItemText primary={'Espace Discourse'} />
                </ListItem>

                <ListItem button key={'2'}>
                    <ListItemIcon><RecordVoiceOverIcon /></ListItemIcon>
                    <ListItemText primary={'Espace Discord'} />
                </ListItem>

                <ListItem button key={'3'}>
                    <ListItemIcon><StorageIcon /></ListItemIcon>
                    <ListItemText primary={'Espace Wiki'} />
                </ListItem>
               

            
              </List>

              <div className={classes.change}>
                  <Button variant="contained" className={classes.button}>
                      <SettingsIcon fontSize="small" className={classes.iconButton}/>  Paramétrer
                  </Button>
              </div>  
            </CardContent>
        </Card>
 

    );
  }
