import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import profilepic from '../../../image/profilepic.jpg'
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreateIcon from '@material-ui/icons/Create';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';



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

export default function UserProfile () {
    const classes = useStyles();
    
    return (

        <Card className={classes.root}>    
            <CardMedia
               component="img"
               alt="Image profil"
               image={profilepic}
               title="Image profil"
            />

        <CardContent>
            
            <div className={classes.margin}>
                <Typography variant="h6" align="center">
                    Aura
                </Typography>
            </div>

            <div className={classes.margin}>
                <Typography variant="subtitle1" align="center" >
                    Aurélie Durant
                </Typography>
            </div>

            < Divider className={classes.divider}/>

            <List>          
            <ListItem>
                <ListItemIcon><LocationOnIcon /></ListItemIcon>
                <ListItemText primary={'Normandie'} />
            </ListItem>

            <Divider />

            <ListItem>
                <ListItemIcon><TwitterIcon /></ListItemIcon>
                <ListItemText primary={'@Aura_Auré'} />
            </ListItem>
            <ListItem>
                <ListItemIcon><FacebookIcon /></ListItemIcon>
                <ListItemText primary={'Aurélie Drd'} />
            </ListItem>
            </List>

            <div className={classes.change}>
                <Button variant="contained" className={classes.button}>
                    <CreateIcon fontSize="small" className={classes.iconButton}/>  Éditer
                </Button>
            </div>    
            
        </CardContent>

        </Card>
 

    );
  }
