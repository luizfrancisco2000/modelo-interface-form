import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position:'relative',
      marginTop: 64,
      background: '#ccc',
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft:64,
      flexGrow: 1,
    },
  }),
);

export default props =>{
    const classes = useStyles()
    return (
      
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" >
              Auditoria sobre a fábrica
            </Typography>
            <div color="inherit">
                <IconButton onClick={(event) => props.changeVisibility(event)}> <VisibilityIcon/> </IconButton>
                <IconButton> <FileCopyIcon/> </IconButton>
                <IconButton> <DeleteIcon/></IconButton>
            </div>
          </Toolbar>
        </AppBar>
      
    )
  }
  