import React from 'react'
import { Topic } from './Topic'

import './Builder.css'

export default props => {
    return (
        <div className="container">
            <div className="formView">
                <h3>Titulo: {props.forms.titulo}</h3>
                <h5>Descrição: {props.forms.descricao}</h5>
                <div>Administrativo</div>
            </div>
        </div>
    )
}