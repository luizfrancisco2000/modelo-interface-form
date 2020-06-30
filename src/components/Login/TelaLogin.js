import React from 'react'
import './Login.css'
import logo from './images/logo.jpg'
import { AiOutlineEye, AiOutlineUser, AiOutlineEyeInvisible } from 'react-icons/ai';
import 'typeface-roboto';

class TelaLogin extends React.Component {   
    constructor(props){
        super(props);
        this.state={
            inputSenha: 'password'
        }
        this.showHide = this.showHide.bind(this)
    }
    showHide(e){
        this.setState({
            inputSenha: this.state.inputSenha=='password'? 'input':'password'
        })
    }
    render(){
        return (
            <div className='container'>
                <div class='card-login'>
                    <img class='login-icon' src={logo}/>
                    <form>
                        <div className='input-box'>
                            <input className='text-input' type='text' placeholder='E-mail'/>
                            <div className='icon-input'> <AiOutlineUser/></div>
                        </div>
                        <div className='input-box'>
                            <input className='text-input' type={this.state.inputSenha} placeholder='Senha'/>
                            <div className='icon-input' onClick={this.showHide}> 
                                    {this.state.inputSenha=='password'?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                            </div>
                        </div>
                        <button class='form-button' type='submit'>ACESSAR</button>
                    </form> 
                </div>
            </div>       
        );
    }
  }
  
  export default TelaLogin;