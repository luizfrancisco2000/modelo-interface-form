import React, { Component } from 'react';
import './builder.css'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

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
export default class Conform extends Component {
    state = {
        currentSelect: 1
    }
    changeType = event => {
        this.setState({ currentSelect: event.target.value })
        this.onAdd()
    }
    render() {
        return (
            <div className="cardsP">
                <h3 className="title">Criar não conformidade</h3>
                <form>
                    <div className="cards">
                        <h4>Informações Gerais</h4>
                        <label>Setor: Administrativo</label> <label style={{float: "right"}}>Norma: ISO 9000</label> 
                    </div>
                    <div className="cards">
                    <h5>Descrição do problema</h5>
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            className="textArea"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </div>
                    <div className="cards">
                    <h5>Disposição Imediata</h5>
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            className="textArea"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </div>
                    <label>Data de entrega:   </label><TextField type="date" style={{ width: '20%' }}InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Data de Entrega" />
                    <div className="cards">
                    <h5>Plano de Trabalho</h5>
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            className="textArea"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </div>
                    <label>Data de Implementação:   </label><TextField type="date" style={{ width: '20%' }}InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Data de Entrega" />
    
                    <div className="cards buttons">
                    <Button className="buttons">Salvar</Button>
                    <Button className="buttons">Cancelar</Button>
                    </div>
                </form>
            </div>
        )
    }
}