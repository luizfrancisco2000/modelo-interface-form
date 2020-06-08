import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import '../Builder.css'

const Select = props => {
    return (
        <TextField style={{ width: '35%', height: 40 }} variant="outlined" select
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

export default class question extends Component {
    state = {
        currentSelect: 1,
        value: '',
        dataInicio: '',
        dataFim: '',
        setor: '',
        peso: '',
        descricao: '',
        Json: {
            component: 'inputText',
            label: ''
        },
    }
    onAdd () {
        this.props.gerarTitulo(this.state.Json);
    }
    changeType = event => {
        this.setState({ currentSelect: event.target.value })
        this. onAdd ()
    }

    change = (event) => {
        this.state.Json.label = event.target.value
        this.setState({ value: event.target.value })
        this. onAdd ()
    }
    changePeso = (event) => {
        this.state.Json.peso = event.target.value
        this.setState({ peso: event.target.value })
        console.log(this.state.Json)
        this. onAdd ()

    }
    changeDescricao = (event) => {
        this.state.Json.descricao = event.target.value
        this.setState({ descricao: event.target.value })
        console.log(this.state.Json)
        this. onAdd ()

    }
    changeData = (event, tipo) => {
        if (tipo == 1) {
            this.state.Json.dataInicio = event.target.value
            this.setState({ dataInicio: event.target.value })
        } else {
            this.state.Json.dataFim = event.target.value
            this.setState({ dataFim: event.target.value })
        }
        console.log(this.state.Json)
        this. onAdd ()

    }
    render() {
        return (
            
            <div className="topic" style={{ marginTop: 45, marginBottom: 20 }}>
                <div className="areaTitle">
                    <TextField value={this.state.value} onChange={this.change}
                        style={{ width: '65%' }} InputProps={{ className: "inputQuestion", }}
                        variant="outlined" placeholder="Título do formulário" />
                    <Select style={{ width: '100%' }} current={this.state.currentSelect} changeSelect={(event) => this.changeType(event)}></Select>
                </div>
                <div style={{ padding: '0px 30px' }}>
                    <TextField multiline rows={3} style={{ width: '100%' }} value={this.state.descricao} onChange={this.changeDescricao}
                        InputProps={{ className: 'textArea' }} placeholder="Descrição do formulário" variant="outlined" />
                </div>
                <div style={{ marginTop: 15, padding: '10px 30px' }}>
                   {/* <TextField type="date" value={this.state.dataInicio} onChange={(e) => this.changeData(e, 1)} style={{ width: '30%' }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Título" />
                    <TextField type="date" value={this.state.dataFim} onChange={(e) => this.changeData(e, 2)} style={{ width: '30%', marginLeft: 15 }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Título" />

                    <TextField value={this.state.peso} onChange={this.changePeso}
                        style={{ width: '25%', marginLeft: 15 }} InputProps={{ className: "inputQuestion", }}
        variant="outlined" placeholder="Peso" />*/}
                </div>
            </div>
        )
    }
}

