import React, { Component } from 'react'
import axios from '../../bd/client'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './builder.css'
import Switch from '@material-ui/core/Switch';
const SelectTemplate = props => {
    return (
        <TextField style={{ width: '20%' }} label="Templates" variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputTemplate"
            }}
            value={props.current}
            onChange={(event) => props.changeSelect(event)}
        >
            <MenuItem value={1}>5S</MenuItem>
            <MenuItem value={2}>Fornecedores</MenuItem>
            <MenuItem value={3}>ISO 9000</MenuItem>

        </TextField>
    )
}

const SelectAuditor = props => {
    return (
        <TextField style={{ width: '20%' }} label="Auditor" variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputTemplate"
            }}
            value={props.current}
            onChange={(event) => props.changeSelect(event)}
        >
            <MenuItem value={1}>Luiz</MenuItem>
            <MenuItem value={2}>Francisco</MenuItem>
            <MenuItem value={3}>Daniel</MenuItem>

        </TextField>
    )
}

const SelectRep = props => {
    return (
        <TextField style={{ width: '20%' }} label="Representante" variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputTemplate"
            }}
            value={props.current}
            onChange={(event) => props.changeSelect(event)}
        >
            <MenuItem value={1}>Luiz</MenuItem>
            <MenuItem value={2}>Francisco</MenuItem>
            <MenuItem value={3}>Daniel</MenuItem>

        </TextField>
    )
}

const SelectSetor = props => {
    return (
        <TextField style={{ width: '20%' }} label="Setor" variant="outlined" select
            InputLabelProps={{
                shrink: true
            }}
            SelectProps={{
                className: "inputTemplate"
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
export default class AuditoriaForm extends Component {
    state = {
        currentSelect: 1,
        checkedB:false
    }

    handleChange = (event) => {
        this.setState({checkedB: event.target.checked });
      };
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
                        <SelectTemplate style={{ width: '50%' }} label="Setor" current={this.state.currentSelect} changeSelect={(event) => this.changeType(event)}></SelectTemplate>
                    </div>
                    <br></br>
                    <div className="areaTitle">
                        <SelectAuditor style={{ width: '50%', marginleft: '30px' }} current={this.state.currentSelect} changeSelect={(event) => this.changeType(event)}></SelectAuditor>
                        <SelectRep style={{ width: '50%', marginleft: '30px' }} current={this.state.currentSelect} changeSelect={(event) => this.changeType(event)}></SelectRep>
                        <SelectSetor style={{ width: '50%', marginleft: '30px' }} current={this.state.currentSelect} changeSelect={(event) => this.changeType(event)}></SelectSetor>

                    </div>
                    <div style={{ marginTop: 15, padding: '10px 30px' }}>
                        <TextField type="date" style={{ width: '20%' }} style={{ width: '20%' }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Título" />
                        <TextField type="date" style={{ width: '20%' }} style={{ width: '20%' }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Título" />

                    </div>
                    <div className="cards">
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            className="textArea"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </div>
                </form>
                <div className="cards">
                    <h4>Confirmação de Login    </h4>

                    <TextField type="text" style={{ width: '20%' }} style={{ width: '20%' }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Login" />
                    <TextField type="password" style={{ width: '20%' }} style={{ width: '20%' }} InputProps={{ className: "inputQuestion", }} variant="outlined" placeholder="Senha" />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.checkedB}
                                onChange={this.handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Ativo"
                    />
                </div>
                <div className="cards buttons">
                    <Button className="buttons">Salvar</Button>
                    <Button className="buttons">Cancelar</Button>

                </div>
            </div>
        )
    }
}