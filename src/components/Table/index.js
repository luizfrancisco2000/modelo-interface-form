import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import ContainerTable from './Container'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(14),
    paddingRight:10,
    paddingBottom:10,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const open = props.text

  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
    <Typography>
      <ContainerTable></ContainerTable>
    </Typography>
    </main>


  );
}

export default Dashboard;