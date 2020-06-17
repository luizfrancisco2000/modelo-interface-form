import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Links from './components/Links';
import Table from './components/Auditoria-NCF/index';
import Form from './components/Form';
import FormNCF from './components/Form-NCF';
import ViewForm from './components/Form/Components/ViewForm/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  console.log(open)
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} />
            <Dashboard text={open} />
          </div>
        </Route>

        <Route path="/auditorias" exact>
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} />
            <Table text={open} />
          </div>
        </Route>

        <Route path="/forms" exact>
          
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} />
            <Form text={open} />
          </div>
        </Route>
        <Route path="/formResp/" exact>
          
          <div className="App">
            <Header handleDrawerOpen={handleDrawerOpen} text={open} />
            <Links handleDrawerClose={handleDrawerClose} text={open} />
            <ViewForm text={open} />
          </div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
