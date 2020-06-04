import React from 'react'
import {Topic} from './Topic'

import '../Builder.css'

export default props =>{
    return(
       <div class="formView">
           <div className="titleForm">Formulário</div>
            {props.form.map((element,i) =>
                <Topic title={element.title} count={i} questions={element.questions}></Topic>
            )}
       </div>
    )
}