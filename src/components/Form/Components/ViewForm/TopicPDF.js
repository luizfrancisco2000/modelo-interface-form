import React, { Component } from 'react'
import { elementsView } from './Elements'
import {  makeStyles } from '@material-ui/core';
const TopicPDF = props => {
    var questions = [];
    questions = props.questions;
    return (
        <div className="TopicView">
            <h3>{props.title}
            </h3>
            {questions.map(element => <div style={{ marginTop: 15 }}>{React.createElement(elementsView['Radio'], element)} </div>)}
        </div>
    )
}

export { TopicPDF }