import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Links from './components/Links';
import Table from './components/Table/index';
import Form from './components/Form';
import ViewForm from './components/Form/Components/ViewForm/index';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Container from '@material-ui/core/Container'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    marginLeft: 170,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

function MainContent(props){
  const classes = useStyles()
  return(
    <main className={clsx(classes.content, {
      [classes.contentShift]: props.open,
    })}>
      <Container maxWidth="xl" style={{minWidth: '510px'}} disableGutters>
        {props.children}
      </Container>
    </main>
  )
}
function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open}  active='home' />
            <MainContent open={open}><Dashboard /></MainContent>
          </div>
        </Route>
        {/* so pra teste */}
        <Route path="/d1" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open}  active='d1' />
            <MainContent open={open}><Dashboard /></MainContent>
          </div>
        </Route>
        <Route path="/d2" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open}  active='d2' />
            <MainContent open={open}><Dashboard /></MainContent>
          </div>
        </Route>

        <Route path="/auditorias" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open}  active='auditorias' />
            <MainContent open={open}><Table /></MainContent>
          </div>
        </Route>

        <Route path="/forms" exact>
          
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} active='forms' />
            <MainContent open={open}><Form /></MainContent>
          </div>
        </Route>
        <Route path="/formResp/" exact>
        
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} />
            <MainContent open={open}><ViewForm /></MainContent>
          </div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
