import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

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

function Example(props) {
  const classes = useStyles();
  const open = props.text

  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
      <div className="container">
      <img src={require('./aviso_manutencao.png')} alt="Minha Figura"/>
      </div>
    </main>


  );
}

export default withRouter(Example)
