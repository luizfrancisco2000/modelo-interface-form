import React,{Component, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioOp from '@material-ui/core/Radio';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import '../Builder.css'

const RadioOption = props =>{
    return(
        <FormControlLabel 
            style={{padding:0}} className="areaOption"
            value = {props.label} label={props.label}
            control = {<RadioOp/>}            
        >

        </FormControlLabel>  
    )
}

class Radio extends Component{
    state = {
        value:''
    }
    
    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    
    render(){
        return(
            <div>
                <div>{this.props.label}</div>
                <RadioGroup onChange={this.handleChange} value={this.state.value}>
                    {this.props.options.map(element => <RadioOption label={element.label}></RadioOption>)}
                </RadioGroup>
                
            </div>
        )
    }
}

const RadioOptionBuilder = props =>{
    
    return(
        <div id={props.id}>
            <div className="areaOption">
                <RadioOp></RadioOp> 
                
                <div className="textOption">
                    <TextField 
                        style={{width:'70%',marginRight:20}} 
                        InputProps={{className:'inputOption'}} placeholder="Opção"
                        value={props.label} onChange={(event) =>props.changeValue(event,props.id)}/>
                    <TextField 
                        style={{width:'20%'}} 
                        InputProps={{className:'inputOption'}} placeholder="Peso"
                        value={props.peso} onChange={(event) =>props.changePeso(event,props.id)}/>
                    <IconButton size="small" onClick={(event) => props.delete(event, props.id)}><CloseIcon/></IconButton>
                </div>
            </div>  
        </div>
    
        
    )
}

const RadioBuilder = props =>{

    const addOption = (event) =>{
        

        var nElement = {
            label: '',
            peso:'',
            changePeso:changePeso,
            changeValue:changeValue
        }

        if(props.options.length == 0)
            nElement.id = 0
        else
            nElement.id = props.options[props.options.length-1].id+1
        var nOptions = [...props.options]
        nOptions.push(nElement)
      
        props.changeOption(nOptions, props.id, props.idTopic)
        
        //this.setState({count:this.state.count+1})
        event.preventDefault()
    }

    const changeValue = (event, id) => {
        var nElement = [...props.options]
        for(var i = 0; i < nElement.length; i++){
            if(nElement[i].id == id){
                nElement[i].label = event.target.value
                break
            }
        }
        props.changeOption(nElement, props.id, props.idTopic)
        event.preventDefault()
    }
    const  changePeso = (event, id) => {
        var nElement = [...props.options]
        for(var i = 0; i < nElement.length; i++){
            if(nElement[i].id == id){
                
                nElement[i].peso = event.target.value
                break
            }
        }
        props.changeOption(nElement, props.id, props.idTopic)
        event.preventDefault()
    }
    const deleteOption = (event,id) =>{
        var nOptions = []
        for(var i = 0; i < props.options.length; i++){
            if(props.options[i].id != id){
                nOptions.push(props.options[i])
            }
        }
        //this.setState({options:nOptions})
        props.changeOption(nOptions, props.id, props.idTopic)
        
    }
    
    return(
        <div id={props.id}>
            <div className="areaQuestion" id={props.id}>
                <TextField 
                    style={{width:'50%'}} InputProps={{className:'inputBuilder'}} 
                    placeholder="Insira a pergunta" variant="outlined" value={props.label}
                    onChange={(event) => props.changeLabel(event,props.id,props.idTopic)}/>
                <TextField 
                    style={{width:'15%'}} InputProps={{className:'inputBuilder'}} 
                    placeholder="Peso" variant="outlined" value={props.peso}
                    onChange={(event) => props.changePeso(event,props.id,props.idTopic)}/>
                
                    <FormControlLabel
                        control={
                        <Switch
                        checked={props.obrigatorio}
                        onChange={(event) => props.changeObrigatorio(event, props.id, props.idTopic)}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Obrigatório"
                />
                <div style={{flex:1}} className="optionQuestion">
                    <IconButton className="addOption" size="small" onClick={(event) => addOption(event)}>
                        <AddIcon style={{color:'#05daa7'}}></AddIcon>
                    </IconButton>  
                    <IconButton size="small" onClick={(event) => props.deleteQuestion(event, props.id, props.idTopic)}>
                        <DeleteIcon></DeleteIcon>
                    </IconButton> 
                </div>
            </div>
            {props.options.map((element,i) => React.createElement(
                RadioOptionBuilder, {...element, changePeso:changePeso, changeValue:changeValue, delete:deleteOption},null))}

        </div>
    )

}

export {RadioBuilder, Radio}