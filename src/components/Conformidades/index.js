import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import Conform from './Conform';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    zIndex: theme.zIndex.drawer + 1,
    padding: theme.spacing(14),
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
  }
}));

export default function Example(props) {
  const classes = useStyles();
  const open = props.text

  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
      <Conform/>
    </main>


  );
}

