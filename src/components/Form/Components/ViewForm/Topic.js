import React,{Component} from 'react'
import {elementsView } from './Elements'

const Topic = props =>{
    var questions = [];

    questions = props.questions;
    return (
    <div className="topicView">
        <h3>{props.title}
        </h3>
        {questions.map(element => <div style={{marginTop:15}}> {element.tipoResposta} {React.createElement(elementsView[element.tipoResposta], element)} </div>)}

    </div>
    )
}

export {Topic}