import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import ContainerTable from './Container'
import { useHistory,withRouter } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: theme.spacing(14),
    paddingLeft: theme.spacing(12),
    paddingRight: 15,
    paddingBottom:10,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    paddingLeft:15,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

function Dashboard(props) {
  return (
    
    <Typography>
      <ContainerTable></ContainerTable>
    </Typography>
  );
}

export default withRouter(Dashboard);