import React, { Component } from 'react'
import { elementsView } from './Elements'

const Topic = props => {
    var questions = [];

    questions = props.questions;
    return (
            <div className="TopicView">
                <h3>{props.title}
                </h3>
                {questions.map(element => <div style={{ marginTop: 15 }}>{React.createElement(elementsView[element.tipoResposta], element)} </div>)}

            </div>
    )
}

export { Topic }