import React,{Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {elementsForm} from './../Form/Elements'
import SelectQuestion from './../Form/SelectQuestion'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TextField from '@material-ui/core/TextField';
import {elementsView } from './../Form/Elements'
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

