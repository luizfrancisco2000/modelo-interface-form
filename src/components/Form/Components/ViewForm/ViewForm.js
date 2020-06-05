import React, { Component } from 'react'
import {
    withRouter
} from "react-router-dom";
import ViewTitle from './ViewTitle'
import Form from './Form'
import axios from '../../../../bd/client'
class ViewForm extends Component {
    state = {
        form: {},
        topicos: []
    }
    componentDidMount() {
        var id = this.props.location.state.id;
        console.log(id)
        axios.get('form/' + id)
            .then(response => {
                this.setState({ form: response.data })
            })
        var t = []
        var p = []
        axios.get('topicForm/' + id)
            .then(response => {
                var topicos = response.data
                if (topicos.length > 0) {
                    topicos.forEach((topico, id) => {
                        console.log("topicos" + topico.titulo)
                        axios.get('questTopics/' + topico.id)
                            .then(response => {
                                var perguntas = response.data
                                if (perguntas.length > 0) {
                                    perguntas.forEach((pergunta, id) => {
                                       
                                        if (pergunta.tipoResposta == "Radio" || pergunta.tipoResposta == "CheckBox" || pergunta.tipoResposta == "ComboBox") {
                                            console.log("true")
                                            console.log(pergunta.id + "   idPergunta")
                                            axios.get('alternativaPergunta/' + pergunta.id)
                                                .then(response => {
                                                    console.log(response.data + "   ab")
                                                    pergunta.options = response.data;
                                                }).catch(error => {
                                                    console.log("erro na parte do alternativa")
                                                })
                                        }
                                        p.push(pergunta)
                                    })
                                }
                                topico.questions = p;
                                t.push(topico)
                                console.log(topico)

                                this.setState({ topicos: t })
                            })
                    })
                }
            })
    }
    render() {
        return (
            <div>
                <ViewTitle forms={this.state.form} />
                <Form form={this.state.topicos}></Form>
            </div>
        )
    }
}

export default withRouter(ViewForm)