import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3001/', //Base da API
  //baseURL: 'http://localhost/Back/public/',
  //baseURL: 'http://localhost/flex-site/Back/public/',
  //Não esQUECER  de trocar pelo caminho de lá da flex
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  }
});

