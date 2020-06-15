import React, { Component } from 'react'
import {
    withRouter
} from "react-router-dom";
import ViewTitle from './ViewTitle'
import Form from './Form'
import axios from '../../../../bd/client'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from "@material-ui/core/Button";

class ViewForm extends Component {
    state = {
        form: {},
        topicos: [],
        questions: []
    }
    printDocument() {
        const input = document.getElementById('2'), data = new Date();
        var doc = new jsPDF('portrait', 'pt', 'a4');

        doc.fromHTML(input, 40, // x coord
            40, { pagesplit: true },
            function (dispose) {
                doc.save("Relatorio - " + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + ".pdf");
            });
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
                                p = []
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
                                this.setState({ questions: p })
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
            <div >
                <div id="1">
                    <ViewTitle forms={this.state.form} />
                    <Form form={this.state.topicos} perguntas={this.state.questions}></Form>
                </div>
                <div id="2" style={{display: "none"}}>
                    <ViewTitle forms={this.state.form} />
                    <Form form={this.state.topicos} perguntas={this.state.questions} pdf="true" type="Radio"></Form>
                </div>
                <Button onClick={this.printDocument} variant="contained" color="primary">
                    Generate Pdf
                                </Button>
            </div>
        )
    }
}

export default withRouter(ViewForm)