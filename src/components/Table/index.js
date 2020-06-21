import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import ContainerTable from './Container'
import { useHistory,withRouter } from "react-router-dom";

function Dashboard(props) {
  return (
    
    <Typography>
      <ContainerTable></ContainerTable>
    </Typography>
  );
}

export default withRouter(Dashboard);