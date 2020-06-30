import React, { Component } from 'react'
import { elementsView } from './Elements'
import {  makeStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
const Topic = props => {
    var questions = [];
    const classes = useStyles();
    questions = props.questions;
    return (
        <div className="TopicView">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ backgroundColor: "lightskyblue" }}
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ width: "100%" }}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {questions.map(element => <div style={{ width: "100%" }}>{React.createElement(elementsView[element.tipoResposta], element)}</div>)}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export { Topic }