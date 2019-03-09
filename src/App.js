import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      equation: ""
    }
  }


  calculate = (event) => {

    const value = event.target.value;

    this.setState({
      equation: this.state.equation + value,
      result: value
    });
  }
  egal = () => {

    const value = eval(this.state.equation);
    this.setState({
      equation: value,
      result: value
    })

  }
  erase = (event) => {
    const value = event.target.value;

    this.setState({
      equation: "",
      result: ""
    });
  }


  ///<input type="text" value= {this.state.equation}>  </input>
  render() {
    return (

      <div>
        <h1> Calculator App </h1>
   <p> {this.state.result}</p>

        <button name="1" value="1" onClick={this.calculate} className="btn btn-light" style={{padding:"15px 24px"}}>  1</button>
        <button name="2" value="2" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  2</button>
        <button name="3" value="3" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  3</button>
        <button name="+" value="+" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 25px"}}>+</button>
        <br></br>
        <button name="4" value="4" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  4</button>
        <button name="5" value="5" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  5</button>
        <button name="6" value="6" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  6</button>
        <button name="-" value="-" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 25px"}}>-</button>
        <br></br>
        <button name="7" value="7" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  7</button>
        <button name="8" value="8" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  8</button>
        <button name="9" value="9" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  9</button>
        <button name="*" value="*" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 25px"}}>*</button>

        <br></br>
        <button name="C" value="C" onClick={this.erase}className="btn btn-danger"style={{padding:"15px 24px"}}>  C</button>
        <button name="0" value="0" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  0</button>
        <button name="=" value="=" onClick={this.egal}className="btn btn-success"style={{padding:"15px 24px"}}>=</button>
        <button name="/" value="/" onClick={this.calculate}className="btn btn-light"style={{padding:"15px 24px"}}>  /</button>


      </div>
    );
  }
}

export default App;
//Number1 : <input type="number" name="number1" onChange={this.changeValue}></input>
    // Number2 : <input type="number" name="number2" onChange={this.changeValue }></input> <br></br>
