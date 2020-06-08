import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import '../Builder.css'

const InputText = function(props){
    return(
        <div>
            <div>{props.label}</div>
            <TextField inputProps={{id:props.idQuestion}} className="inputText" placeholder="Sua resposta">
            </TextField>
           
        </div>
    )
}

class InputTextBuilder extends Component{
    
    state = {
        value: this.props.value,
    }

    render(){       
        return(
            <div className="areaQuestion" id={this.props.id}>
                <TextField 
                    style={{width:'60%'}} InputProps={{className:'inputBuilder'}} 
                    placeholder="Insira a pergunta" variant="outlined" value={this.props.label}
                    onChange={(event) => this.props.changeLabel(event,this.props.id,this.props.idTopic)}/>
                <TextField 
                    style={{width:'15%'}} InputProps={{className:'inputBuilder'}} 
                    placeholder="Peso" variant="outlined" value={this.props.peso}
                    onChange={(event) => this.props.changePeso(event,this.props.id,this.props.idTopic)}/>
                
                    <FormControlLabel
                        control={
                        <Switch
                        checked={this.props.obrigatorio}
                        onChange={(event) => this.props.changeObrigatorio(event, this.props.id, this.props.idTopic)}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Obrigatório"
                />
                <div className="optionQuestion"> 
                    <IconButton size="small" onClick={(event) => this.props.deleteQuestion(event, this.props.id, this.props.idTopic)}>
                        <DeleteIcon></DeleteIcon>
                    </IconButton> 
                </div>
            </div>
        )
    }
}



export {InputTextBuilder, InputText}

