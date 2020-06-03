import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import Looks5Icon from '@material-ui/icons/Looks5';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#05DAA7'
    },
    list: {
        color: '#303337'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));

function Links(props) {
    const classes = useStyles();
    const theme = useTheme();
    const open = props.text



    return (
        <div>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }, classes.paper),

                }}
            >

                <div className={classes.toolbar}>
                    <Typography>Flex Industries</Typography>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List className={classes.list}>
                    <Link to="/">
                        <ListItem button >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItem}>Dashboard</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to="/auditorias">
                        <ListItem button>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Auditorias"></ListItemText>
                        </ListItem>
                    </Link>


                    <ListItem button>
                        <ListItemIcon>
                            <Looks5Icon />
                        </ListItemIcon>
                        <ListItemText primary="Auditoria 5s"></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>

    );
}

export default Links;