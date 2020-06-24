 
import React from 'react';import { Typography, makeStyles, Divider, Button, Card, TextField, Grid, CardContent } from '@material-ui/core';

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
    marginTop: 30,
    display: "flex"
  },
  buttonReject: {
    background: "red",
    color: '#ffff',
    "&:hover": {
        backgroundColor: "red",
      },
    fontWeight: 400,
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
    <main>
      <Typography variant="h1" className={classes.textH1} >
        Criar registro de não conformidade
      </Typography>

      <Divider />

      <Typography variant="h2" className={classes.textH2}>
        Informações iniciais
        </Typography>


      <Card variant="outlined" className={classes.cardContent}>
        <CardContent style={{justifyContent: 'space-between', display: 'flex'}}>
          <Grid container className={classes.gridContent}>
            <Grid item>
              <Typography variant="body1" className={classes.textBody}>
                SETOR:
              </Typography>
            </Grid>

            <Grid>
              <Typography variant="body2" className={classes.textResult}>
                Qualidade
              </Typography>
            </Grid>
          </Grid>


          <Grid container style={{justifyContent: 'flex-end', display: 'flex'}}>
            <Grid item>
              <Typography variant="body1" className={classes.textBody}>
                NORMAS:
              </Typography>
            </Grid>


            <Grid item>
              <Typography variant="body2" className={classes.textResult}>
                ISO 9001
              </Typography>

            </Grid>
          </Grid>


        </CardContent>
      </Card>


      <Card variant="outlined" className={classes.cardContent}>
        <CardContent>
          <Typography>
            Foram encontrados os problemas:
            -x
            -y
            -z
              </Typography>
        </CardContent>

      </Card>


      <Typography variant="h2" className={classes.textH2}>
        Disposição imediata
      </Typography>

      <Card variant="outlined" className={classes.cardContent}>
        <CardContent></CardContent>
      </Card>

      <Grid container >
        <Grid item>
          <Typography variant="h2" className={classes.textH2}>
            Data de entrega:
          </Typography>
        </Grid>

        <Grid item>
          <form noValidate className={classes.datePicker}>
            <TextField
              id="date"
              type="date"
              defaultValue="2020-06-17"
            />
          </form>
        </Grid>
        
      </Grid>

      <Typography variant="h2" className={classes.textH2}>
        Plano de trabalho
      </Typography>

      <Card variant="outlined" className={classes.cardContent}>
        <CardContent></CardContent>
      </Card>

      <Grid container >
        <Grid item>
          <Typography variant="h2" className={classes.textH2}>
            Data de implantação:
          </Typography>
        </Grid>

        <Grid item>
          <form noValidate className={classes.datePicker}>
            <TextField
              id="date"
              type="date"
              defaultValue="2020-06-17"
            />
          </form>
        </Grid>
        
      </Grid>

      <Divider className={classes.dividerBot} />
      <Grid container justify="space-between" >
          <Grid item className={classes.buttons} >
            <Button variant="contained" href="Salvar" className={classes.buttonReject}>
                Rejeitar
            </Button>
          </Grid>
          <Grid item className={classes.buttons} justify="flex-end">
            <Button variant="contained" href="Salvar" className={classes.buttonSave}>
                Salvar
            </Button>
            <Button variant="contained" href="Cancelar" className={classes.buttonCancel}>
                Cancelar
            </Button>    
          </Grid>
        
      </ Grid>

    </main>


  );
}

