import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx';
import HorizontalCards from './HorizontalCards'
import DragDropArea from './DragDropArea'

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fixedCards: {
    marginBottom: '20px'
  }
}));

function Dashboard(props) {
  const classes = useStyles()
  return (
      <div>
        <Typography className={classes.title} variant="h4">Dashboard</Typography>
        {/* cards que nao podem ser movidos */}
        <HorizontalCards className={classes.fixedCards}/>
        {/* cards com Drag and Drop */}
        <DragDropArea/>
      </div>
  );
}

export default Dashboard;