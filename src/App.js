import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import Form from './components/Form'
import Form2 from './components/Form2'



export default class App extends Component {

render() {

      return (

<div classname="App">

<p>
<h1> Registration Form
</h1>
</p>

<Form/>
<Form2/>

</div>

)

}

}
   
//greet:React.PropTypes.func

