import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      marginTop: 10,
    },
}); 

export default function Content (props) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {props.children}
        </Container>
    )
}