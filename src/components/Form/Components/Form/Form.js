import React from 'react'
import {Topic} from './Topic'

import '../Builder.css'

export default props =>{
    
    const sub = (data) =>{
        
        [...document.form.elements].forEach(element => {
            console.log(element.value)
        });
        
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