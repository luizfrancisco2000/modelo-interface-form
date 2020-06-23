import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import Looks5Icon from '@material-ui/icons/Looks5';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import clsx from 'clsx';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#05DAA7',
        border: 'none',
    },
    list: {
        color: '#303337',
        marginLeft: '6px',
        fontStyle: 'none',
        outline: 'none',
        textDecoration: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
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
        [theme.breakpoints.only('sm')]: {
            display: 'none',
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
    activeIcon: {
        backgroundColor: '#fff',
        // marginRight: '-5px',
        
        borderRadius: '25px 0 0 25px',
    },
    link: {
        textDecoration: 'none',
        color: '#303337',
    }
}));

function ListElement(props){
    const classes = useStyles();
    const theme = useTheme();
    const open = props.text; 
    var mainActive = false;
    if(props.sublinks){
        props.sublinks.forEach(item=>{
            if(item.name == props.active) mainActive = true;
        })
    }    

    return(
        <div>

        <Link to={props.link} className={classes.link}>
            <ListItem button 
            className={props.active==props.name?
            classes.activeIcon
            :mainActive && !open? classes.activeIcon 
            :null}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText className={[classes.listItem, classes.links]}>{props.title}</ListItemText>
            </ListItem>
        </Link>
            {props.sublinks?
                <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                { props.sublinks.map(item => {
                    return (
                        <Link to={item.link} className={classes.link}>
                            <ListItem button 
                            style={{paddingLeft: '30px'}}
                            className={props.active==item.name?classes.activeIcon:null}>
                    <ListItemIcon >
                     <InsertDriveFileOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sublinks" />
                  </ListItem>
                        </Link>
                    )
                })}
                  
                </List>
              </Collapse>
               
            :null}
        </div>
      
    )
    
}

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
                    <ListElement text={props.text} link="/" active={props.active} name="home" icon={<DashboardIcon />} title="Dashboard"></ListElement>
                    <ListElement text={props.text} link="/auditorias" active={props.active} name="auditorias" icon={<StorageIcon />} title="Auditorias"
                    sublinks={
                        [{ link: "/d1", title: "Auditoria 5s", name: "d1"},
                        { link: "/d2", title: "Auditoria 5s", name: "d2"},]
                    } />
                    <ListElement text={props.text} link="/forms" active={props.active} name="forms" icon={<Looks5Icon />} title="Auditoria 5s" />
                    <ListElement text={props.text} link="/auditoriaNCF-chefe" active={props.active} name="auditoriaNCF-chefe" icon={<Looks5Icon />} title="NCF-chefe" />
                    <ListElement text={props.text} link="/auditoriaNCF-setor" active={props.active} name="auditoriaNCF-setor" icon={<Looks5Icon />} title="NCF-setor" />
                
                </List>
            </Drawer>
        </div>

    );
}

export default Links;