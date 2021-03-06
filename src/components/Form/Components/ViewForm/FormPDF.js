import React from 'react'
import { TopicPDF } from './TopicPDF'
import { elementsView } from './../ViewForm/Elements'
import './Builder.css'
import Button from "@material-ui/core/Button";
export default props => {

    const sub = (data) => {
        console.log('data'+data)
        alert('data'+data)
        var json = []
        var resp = [...document.form.elements]
        for (var i = 0; i < resp.length - 1; i++) {
            if (resp[i].value != undefined) {
                console.log(resp[i].option)
                if (resp[i].type !== "radio" && resp[i].type !== "checkbox")
                    json.push({ value: resp[i].value, idQuestion: resp[i].id })
                else if (resp[i].checked)
                    json.push({ value: resp[i].value, idQuestion: resp[i].id })
            }
        }

        for (var i = 0; i < json.length; i++) {
            console.log(json[i])
        }
        alert('data')
    }

    return (
        <div className="container">
            <div className="formView">
                <form name="form" onSubmit={sub}>
                    {props.form.map((element, i) =>
                        <div className="container">
                            <TopicPDF title={element.titulo} questions={element.questions}/>
                        </div>
                    )}
                    <Button style={{ backgroundColor: '#05daa7', color: 'white'}} type="submit">Salvar</Button>
                </form>
            </div>
        </div>

    )
}