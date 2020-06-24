import React, { Component } from 'react';
import './bd/client.js'
import Topic from './Components/Form/Topic'
import FormTitle from './Components/Form/FormTitle'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import AppBar from './Components/Form/AppBarForm'
import { types} from './Components/Form/Elements'
import DragDrop from './Components/Form/DragDrop'
import Form from './Components/Form/Form'
import ViewTitle from './Components/ViewForm/ViewTitle'
import './Components/Builder.css'
import axios from './../../bd/client.js'
import { useHistory,withRouter } from "react-router-dom";
class App extends Component {
  state = {
    topic: [],
    count: 0,
    formVisible: false,
    selectDrag: 0,
    enviado: {},
    titulo: {
      label:'',
      descricao:''
    }
  }

  converte = () =>{
    const Json = []

    this.state.topic.forEach(element =>{
      
      var questions = []
      element.questions.forEach(question => {
        var options = []
        question.options.forEach(op => options.push({label:op.label, peso:op.peso}))
        questions.push({
          label:question.label, 
          peso:question.peso, 
          type:question.type, 
          obrigatorio:question.obrigatorio,
          options: options
        })
      })
      if(questions.peso == ''){
        
        questions.peso = null
      }
      Json.push({title:element.title, questions:questions})
    })
    return Json
  }

  onSave = (event) =>{
    const Json = this.converte()
    this.props.history.push(`/auditorias`)
        let e = this.state.enviado;
    e.topics = this.converte()
    this.setState({eviando:e})
    console.log(this.state.enviado)
    axios.post('/form',this.state.enviado)
    .then(response=>{
      
      if(response.data){
        
        console.log('aaaaaaeeeeeeeeeee  ')
      }
    }).catch(error=>{
      console.log(error)
    }) 
  }

  gerarTitulo=(Json)=>{
    this.setState({ enviado: Json })
    this.setState({ titulo: Json })
  }
  changeVisibility = (event) => {
    this.setState({ formVisible: !this.state.formVisible })
    event.preventDefault()
  }

  changeOption = (nOptions, idQuestion, idTopic) => {
    console.log('nova opções: ')
    console.log(nOptions)

    console.log(idQuestion, idTopic)
    var nTopic = [...this.state.topic]
    for (var i = 0; i < nTopic.length; i++) {
      var aux = nTopic[i]
      if (aux.id == idTopic) {
        for (var j = 0; j < aux.questions.length; j++) {
          if (aux.questions[j].id == idQuestion) {

            nTopic[i].questions[j].options = nOptions
            break
          }
        }
      }
    }
    console.log("saoi assim: ")
    console.log(nTopic)
    this.setState({ topic: nTopic })
  }

  changeObrigatorio = (event, idQuestion, idTopic) => {
    var nTopic = [...this.state.topic]

    for (var i = 0; i < nTopic.length; i++) {
      var aux = nTopic[i]
      if (aux.id == idTopic) {
        for (var j = 0; j < aux.questions.length; j++) {
          if (aux.questions[j].id == idQuestion)
            nTopic[i].questions[j].obrigatorio = !nTopic[i].questions[j].obrigatorio
        }
      }
    }
    event.preventDefault()
    this.setState({ topic: nTopic })

  }

  changeLabel = (event, idQuestion, idTopic) => {
    var nTopic = [...this.state.topic]

    for (var i = 0; i < nTopic.length; i++) {
      var aux = nTopic[i]
      if (aux.id == idTopic) {
        for (var j = 0; j < aux.questions.length; j++) {
          if (aux.questions[j].id == idQuestion)
            nTopic[i].questions[j].label = event.target.value
        }
      }
    }
    event.preventDefault()
    this.setState({ topic: nTopic })
  }

  changePeso = (event, idQuestion, idTopic) => {
    var nTopic = [...this.state.topic]

    for (var i = 0; i < nTopic.length; i++) {
      var aux = nTopic[i]
      if (aux.id == idTopic) {
        for (var j = 0; j < aux.questions.length; j++) {
          if (aux.questions[j].id == idQuestion)
            nTopic[i].questions[j].peso = event.target.value
        }
      }
    }
    event.preventDefault()
    this.setState({ topic: nTopic })
  }

  deleteQuestion = (event, idQuestion, idTopic) => {
    var nTopic = [...this.state.topic]

    for (var i = 0; i < nTopic.length; i++) {
      var aux = nTopic[i]
      if (aux.id == idTopic) {
        for (var j = 0; j < aux.questions.length; j++) {
          if (aux.questions[j].id == idQuestion)
            nTopic[i].questions.splice(j, 1)
        }
      }
    }
    event.preventDefault()
    this.setState({ topic: nTopic })
  }

  changeTopicTitle = (event, id) => {
    var nTopic = [...this.state.topic]
    
    for (var i = 0; i < nTopic.length; i++) {
      if (nTopic[i].id == id) {
        nTopic[i].title = event.target.value
        break
      }
    }
    this.setState({ topic: nTopic })
    event.preventDefault()
  }

  deleteTopic = (event, id) => {
    var nTopic = [...this.state.topic]
    console.log(id)
    for (var i = 0; i < nTopic.length; i++) {
      if (nTopic[i].id == id) {
        nTopic.splice(i, 1)
        break
      }
    }
    this.setState({ topic: nTopic })
  }
  addTopic = (event) => {
    var nQuestion = [...this.state.topic]
    var element = {
      id: this.state.count,
      title: '',
      questions: [],
      //changeLabel: this.changeLabel,
      onDrop: this.onDrop,
      deleteTopic: this.deleteTopic,
      changeTopicTitle: this.changeTopicTitle,
    }

    this.setState({ count: this.state.count + 1 })
    nQuestion.push(element)
    this.setState({ topic: nQuestion })
    
  }

  onDrop = (event, id) => {
    var nElement = {
      label: '',
      options: [],
      peso: '',
      obrigatorio: false,
      changeLabel: this.changeLabel,
      changePeso: this.changePeso,
      changeOption: this.changeOption,
      deleteQuestion: this.deleteQuestion,
      changeObrigatorio: this.changeObrigatorio,
      idTopic: id,
      type: types[this.state.selectDrag - 1]
    }

    var nTopics = [...this.state.topic]

    for (var i = 0; i < nTopics.length; i++) {

      if (id == nTopics[i].id) {
        if (nTopics[i].questions.length == 0)
          id = 0
        else {
          id = nTopics[i].questions[nTopics[i].questions.length - 1].id + 1
        }
        nTopics[i].questions.push({ ...nElement, id: id })
      }
    }
    this.setState({ topic: nTopics })
    event.preventDefault()
  }

  showForm = () => {
    
    return (
      <div className="containerForm">
        <ViewTitle forms={this.state.titulo} />
        <Form form={this.converte()}></Form>
      </div>
    )
  }

  showBuilder = () => {
    return (
      <div className="containerForm">
        <DragDrop onDragStart={this.selectDrag}></DragDrop>
        {console.log(this.state.titulo)}
        <FormTitle title = {this.state.titulo} gerarTitulo={this.gerarTitulo}></FormTitle>
        {this.state.topic.map((element, i) => React.createElement(Topic, { ...element, count: i + 1 }))}

        <div className="addQuestion">
          <IconButton style={{ backgroundColor: '#05daa7' }} onClick={(event) => this.addTopic(event)}><AddIcon style={{ color: 'white' }}></AddIcon></IconButton>
        </div>
        <div className="areaSave">
          <Button style={{ backgroundColor: '#272c34', color: 'white' }} color="primary">Cancelar</Button>
          <Button style={{ backgroundColor: '#05daa7', color: 'white' }} onClick={(event)=>this.onSave(event)} color="primary">Salvar</Button>
        </div>
      </div>
    )

  }

  selectDrag = (event, id) => {
    this.setState({ selectDrag: id })
  }
  render() {
    return (
      <div>
        <AppBar changeVisibility={this.changeVisibility}></AppBar>

        {this.state.formVisible ? this.showForm() : this.showBuilder()}
      </div>
    )
  }
}


export default withRouter(App);
