import React from 'react';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@material-ui/core';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  textPadding: {
    paddingLeft: 15,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  buttonDelegation: {
    marginLeft: 'auto',
    borderRadius: '50px',
    backgroundColor: '#9500FF',
    color: 'white', 
  },
  iconButton: {
    marginRight: 10, 
}
})); 


function createData(name, input, output) {
  return { name, input, output };
}

const rows = [
  createData('Aurifex', '', 50),
  createData('Jean', 150, ''),
  createData('Kraken95', 50, ''),
];

export default function UserDelegation() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    console.log(expanded)
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography variant="h6">
          Délégations : 250 points
          </Typography> 
      </CardContent>
              
      <CardActions>
        
        <Button
          className={clsx(classes.expand, {
            expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >Voir les délégations</Button>

        <Button variant="contained" className={classes.buttonDelegation}>
          <CompareArrowsIcon className={classes.iconButton} />
          Déléguer
        </Button>


      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Délégation</TableCell>
                    <TableCell align="right">Reçues</TableCell>
                    <TableCell align="right">Transmises</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                      {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                    <TableCell align="right">{row.input}</TableCell>
                    <TableCell align="right">{row.output}</TableCell>

                  </TableRow>
                ))}

                </TableBody>
              </Table>
            </TableContainer>
        </CardContent>
      </Collapse>



    </Card>
  );
}