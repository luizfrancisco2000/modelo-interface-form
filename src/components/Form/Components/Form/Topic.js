import React,{Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {elementsForm} from './Elements'
import SelectQuestion from './SelectQuestion'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TextField from '@material-ui/core/TextField';
import {elementsView } from './Elements'
import '../Builder.css'

const Topic = props =>{
    return (
    <div className="topicView">
        <h3>
            {props.title}
        </h3>
            {props.questions.map(element => <div style={{marginTop:15}}> {React.createElement(elementsView[element.type], element)} </div>)}
        
    </div>
    )
}

export {Topic}

export default class extends Component{
    state = {
         currentSelect:1,
         value:this.props.label
    }

    onDropOver = (event) =>{
        event.preventDefault()
    }

    delete = (event) => {
        this.props.deleteTopic(event, this.props.id)
        
    }

    render(){
        return(
            <div className="topic" id={this.props.id}>
                 
                <div className="topicTitle">
                    <TextField style={{width:'70%'}}  value={this.props.title}  
                    onChange={(event) => this.props.changeTopicTitle(event, this.props.id)}
                    InputProps={{className:'inputBuilder'}} placeholder={"Tópico "+this.props.count} variant="outlined"/>
                    
                </div>
                <div id="mds" className="questions" onDrop ={(event) =>
                    this.props.onDrop(event,this.props.id)} onDragOver={this.onDropOver}>
                    <div style={{padding:10}}>Arraste os ícones para adicionar perguntas</div>
                   
                    {this.props.questions.map((element, i) => 
                        React.createElement(elementsForm[element.type], {...element})
                    
                    )}

                </div>
                <div className="options">
                    <IconButton><FileCopyIcon></FileCopyIcon></IconButton>
                    <IconButton onClick={(event) =>this.props.deleteTopic(event, this.props.id)}><DeleteIcon></DeleteIcon></IconButton>
                </div>
            </div>
        )
    }
    
}