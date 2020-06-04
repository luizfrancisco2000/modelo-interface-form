import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import '../Builder.css'
const DateInput = function(props){
    return(
        <div>
            <div>{props.label}</div>
            <TextField type="date" variant="outlined">
            </TextField>
       
        </div>
    )
}

class DateInputBuilder extends Component{
    
    state = {
        value: this.props.value,
    }
    change = (event,id) => {
        this.props.change(id, event.target.value)
    }

    render(){
        return(
            <div className="areaQuestion" id={this.props.id}>
                <TextField 
                    style={{width:'60%'}} InputProps={{className:'inputBuilder'}} 
                    placeholder="Insira a pergunta" variant="outlined" value={this.props.label}
                    onChange={(event) => this.props.changeLabel(event,this.props.id,this.props.idTopic)}/>
                
                <div style={{flex:1}}></div>
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



export {DateInput, DateInputBuilder}

