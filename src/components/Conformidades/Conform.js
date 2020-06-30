import React from 'react';
import { Typography, makeStyles, Divider, Button, Card, TextField, Grid, CardContent } from '@material-ui/core';
import clsx from 'clsx';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './builder.css'
import Switch from '@material-ui/core/Switch';

import MenuItem from "@material-ui/core/MenuItem";

const Select = props => {
    return (
        <TextField label="Setor" style={{ width: '35%', height: 40 }} variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputQuestion"
            }}
            value={props.current}
            onChange={(event) => props.changeSelect(event)}
        >
            <MenuItem value={1}>Administrativo</MenuItem>
            <MenuItem value={2}>Inserção Manual</MenuItem>
            <MenuItem value={3}>TI</MenuItem>

        </TextField>
    )
}

const Select1 = props => {
    return (
        <TextField label="Normas" style={{ width: '35%', height: 40 }} variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputQuestion"
            }}
            value={props.current}
            onChange={(event) => props.changeSelect(event)}
        >
            <MenuItem value={1}>ISO 9000</MenuItem>
            <MenuItem value={2}>NR 100</MenuItem>
            <MenuItem value={3}>ISO 9001</MenuItem>

        </TextField>
    )
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    textH1: {
        fontSize: theme.typography.h1.fontSize = 24,
        fontWeight: theme.typography.h1.fontWeight = 400,
    },
    textH2: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: theme.typography.h2.fontSize = 16,
    },
    textBody: {
        marginBlock: 10,
        fontSize: theme.typography.body1.fontSize = 16,
    },
    textResult: {
        marginLeft: 10,
        fontSize: theme.typography.body2.fontSize = 18,
        fontWeight: theme.typography.body2.fontWeight = 500,
    },
    cardContent: {
        marginBottom: 10,
        minHeight: 100,
    },
    gridContent: {
        marginBottom: 15,
    },
    datePicker: {
        marginTop: 5,
        marginLeft: 10
    },
    dividerBot: {
        marginTop: 30,
    },
    buttons: {
        marginTop: 30
    },
    buttonSave: {
        background: "#05DAA7",
        color: '#ffff',
        "&:hover": {
            backgroundColor: "#05DAA7",
        },
        fontWeight: 400,
    },
    buttonCancel: {
        marginLeft: 10,
        color: '#ffff',
        "&:hover": {
            backgroundColor: "#303337"
        },
        background: "#303337",
        fontWeight: 400,
    },
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

export default function FormNCF(props) {
    const classes = useStyles();
    const open = props.text

    return (
        <main className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}>
            <Typography variant="h1" className={classes.textH1} >
                Criar não conformidades
      </Typography>

            <Divider />
            <Typography variant="h2" className={classes.textH2}>
                Informações Gerais
        </Typography>
            <Card variant="outlined" className={classes.cardContent}>
                <CardContent>
                    <Select style={{ width: '50%' }} ></Select>
                    <Select1 style={{ width: '50%' }}></Select1>
                </CardContent>

            </Card>

            <Typography variant="h2" className={classes.textH2}>
                Descrição
            </Typography>
            <Card variant="outlined" className={classes.cardContent}>
                <CardContent>
                    <TextareaAutosize
                        rowsMax={4}
                        aria-label="maximum height"
                        className="textArea"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />

                </CardContent>
            </Card>
            <Divider className={classes.dividerBot} />
    
            <Grid container className={classes.buttons} justify="flex-end">
                <Button variant="contained" href="Salvar" className={classes.buttonSave}>
                    Salvar
      </Button>

                <Button variant="contained" href="Cancelar" className={classes.buttonCancel}>
                    Cancelar
      </Button>
            </ Grid>

        </main>


    );
}

