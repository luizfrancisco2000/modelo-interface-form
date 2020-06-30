import React, { Component } from 'react'
import './style.css'
export default class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="notfound">
                    <div className="notfound-404"></div>
                    <h1>404</h1>
                    <h2>Oops! Página não encontrada</h2>
                    <p>Desculpe, mas a página que você está procurando não existe, foi removida. nome alterado ou está temporariamente indisponível</p>
                </div>
            </div>
        )
    }
}