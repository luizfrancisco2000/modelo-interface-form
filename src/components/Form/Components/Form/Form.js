import React from 'react'
import {Topic} from './Topic'

import '../Builder.css'

export default props =>{
    
    const sub = (data) =>{
        var json = []
        
        var resp = [...document.form.elements]

        for(var i = 0; i < resp.length-1; i++){
            if(resp[i].value != undefined){
                console.log(resp[i].option)
                if(resp[i].type !== "radio" && resp[i].type !== "checkbox")
                    json.push({value:resp[i].value, idQuestion:resp[i].id})
                else if(resp[i].checked)
                    json.push({value:resp[i].value, idQuestion:resp[i].id})
            }
        }
     
        for(var i = 0; i < json.length; i++){
            console.log(json[i])
        }
        alert('data')
    }

    return(
       <div class="formView">
           <div className="titleForm">Formulário</div>
           <form name="form" onSubmit={sub}> 
                {props.form.map((element,i) =>
                    <Topic title={element.title} count={i} questions={element.questions}></Topic>
                )}
                <input type="submit"></input>
            </form>
       </div>
    )
}