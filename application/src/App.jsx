import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeSmartie } from "./actions";
import Smartie from "./components/smartie/smartie";
import './App.css';

class App extends Component {

  onClickHandler = (color) => {
    this.props.removeSmartie(color)
  }


  render() {
    return (
      <div>
        <h1>TOTAL SMARTIES:{this.props.smarties.total}</h1>
      <div className="">
      <div Style="display:flex">
       <Smartie color="brown"/>
       <Smartie color="brown"/>
       <Smartie color="brown"/>
       <Smartie color="brown"/>
       <Smartie color="brown"/>
       <Smartie color="brown"/>
      </div>
      <p>{this.props.smarties.brown}</p>
      <button onClick={() => this.onClickHandler("brown")}>BROWN</button>
      <div Style="display:flex">
       <Smartie color="orange"/>
       <Smartie color="orange"/>
       <Smartie color="orange"/>
       <Smartie color="orange"/>
      </div> 
      <p>{this.props.smarties.orange}</p>
      <button onClick={() => this.onClickHandler("orange")}>ORANGE</button>
      <div Style="display:flex">
       <Smartie color="purple"/>
       <Smartie color="purple"/>
       <Smartie color="purple"/>
       <Smartie color="purple"/>
       <Smartie color="purple"/>
       <Smartie color="purple"/>
      </div> 
      <p>{this.props.smarties.purple}</p>
      <button onClick={() => this.onClickHandler("purple")}>PURPLE</button>
      <div Style="display:flex">
       <Smartie color="pink"/>
       <Smartie color="pink"/>
       <Smartie color="pink"/>
       <Smartie color="pink"/>
       <Smartie color="pink"/>
      </div> 
      <p>{this.props.smarties.pink}</p>
      <button onClick={() => this.onClickHandler("pink")}>PINK</button>
      <div Style="display:flex">
       <Smartie color="red"/>
       <Smartie color="red"/>
       <Smartie color="red"/>
      </div> 
      <p>{this.props.smarties.red}</p>
      <button onClick={() => this.onClickHandler("red")}>RED</button>
      <div Style="display:flex">
       <Smartie color="green"/>
       <Smartie color="green"/>
       <Smartie color="green"/>
      </div> 
      <p>{this.props.smarties.green}</p>
      <button onClick={() => this.onClickHandler("green")}>GREEN</button>
      <div Style="display:flex">
       <Smartie color="yellow"/>
       <Smartie color="yellow"/>
       <Smartie color="yellow"/>
      </div>
      <p>{this.props.smarties.yellow}</p>
      <button onClick={() => this.onClickHandler("yellow")}>YELLOW</button>
      <div Style="display:flex">
       <Smartie color="blue"/>
       <Smartie color="blue"/>
      </div>
      <p>{this.props.smarties.blue}</p>
      <button onClick={() => this.onClickHandler("blue")}>BLUE</button>
      </div>
      <img src="smarties_pic.jpg" alt="smarties" Style="width:500px;height:500px;padding:50px;"/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smarties: state.smarties
  };
};


const mapDispatchToProps = dispatch => {
  return {
    removeSmartie: (color) => {
      dispatch(removeSmartie(color));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
