import React, { Component } from 'react';
import './smartie.css';

class Smartie extends Component {

  render() {
    return ( 
        <p className={this.props.color}/>
    ) 
  } 
}

export default (Smartie);