import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx';
import HorizontalCards from './HorizontalCards'
import DragDropArea from './DragDropArea'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift: {
    marginLeft: 170,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fixedCards: {
    marginBottom: '20px'
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const open = props.text

  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })} >
      <Container maxWidth="xl">
        <Typography className={classes.title} variant="h4">Dashboard</Typography>
        {/* cards que nao podem ser movidos */}
        <HorizontalCards className={classes.fixedCards}/>
        {/* cards com Drag and Drop */}
        <DragDropArea/>
      </Container>
    </main>
  );
}

export default Dashboard;