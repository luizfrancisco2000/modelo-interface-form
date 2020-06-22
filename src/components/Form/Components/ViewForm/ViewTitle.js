import React from 'react'
import { Topic } from './Topic'
import { TextField, Grid } from '@material-ui/core';

import './Builder.css'

export default props => {
    return (
        <div>
            <div className="container">
                
                <div className="formView">
                    <h3>Informações do Colaborador(a)</h3>
                    <label>Nome: </label>
                    <br></br>
                    <TextField type="text" style={{ minWidth: "400px" }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Nome" />
                    <br></br>
                    <label>Função: </label>
                    <br></br>
                    <TextField type="text" style={{ minWidth: "400px" }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Função" />
                    <br></br>
                    <label>Matrícula: </label>
                    <br></br>
                    <TextField type="text" style={{ minWidth: "400px" }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Matricula" />

                </div>
            </div>
            <div className="container">
                <div className="formView">
                    <label style={{ textalign: "center", alignitems: "center" }}>10 - Pontuação de não conformidades = Pontuação do Item</label>
                    <br></br>
                    <br></br>
                    <label style={{ textalign: "center", alignitems: "center" }}>0 a 3 pontos - RUIM 4 a 6 pontos - REGULAR 7 a 9 pontos - BOM 10 pontos - ÓTIMO</label>
                </div>
            </div></div>
    )
}