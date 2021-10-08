import React from 'react'
import ReactDom from 'react-dom'

const Elemento = () => <h1>Hola Mundo</h1>

ReactDom.render(<Elemento/>, document.getElementById('root'))