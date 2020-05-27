import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Links from './components/Links';

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
    <div className="App">
      <Header handleDrawerOpen={handleDrawerOpen} text={open} />
      <Links handleDrawerClose={handleDrawerClose} text={open}/>
      <Dashboard text={open}/>
    </div>
  );
}

export default App;
