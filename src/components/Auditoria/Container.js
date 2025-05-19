import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import SortIcon from '@material-ui/icons/Sort';
import AddIcon from '@material-ui/icons/Add'
import { InputAdornment } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Table from './Table'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import Table from './Table'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const styles = makeStyles((theme) => ({
  container: {
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    minWidth:250,
    ['@media (max-width:660px)']: { // eslint-disable-line no-useless-computed-key
      width:385,
      justifyContent: 'center',
      alignItems:'center',
      textAlign:'center'
    }
  },
  btn: {
    marginLeft: '2%',
    color: "#6e7573"
  },
  areaTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10
  },

  areaControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 30,
    marginRight:10
  }

}));

export default function container(props) {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div className={classes.areaTitle}>
        <div className={classes.title}>
          Auditoria Geral
            </div>

        <div className={classes.areaControl}>
          <TextField
            type="search"
            variant="outlined"
            placeholder="Pesquise"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="disabled" />
                </InputAdornment>
              ),
              className: classes.input
            }}
          />

          <Link to="forms">
            <IconButton style={{ backgroundColor: '#05daa7' }} size="small" className={classes.btn}>
              <AddIcon style={{ color: "white" }} />
            </IconButton>
          </Link>
        </div>
      </div>
      <Table></Table>
    </div>
  )
}
