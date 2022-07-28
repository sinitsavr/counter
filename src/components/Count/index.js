import React, { Component } from 'react';
import Counter from '../Counter';
class Count extends Component {
  constructor(props){
  super(props)
  this.state={
    number:0,
    step:1
  }
}
handlerChange=({target:{value}})=>{
    this.setState({number:Number(value)})
}
  render() {
    
    return (
      <>
      <Counter step={this.state.number}/>
      <input type='number' 
      value={this.state.number}
      onChange={this.handlerChange}/>
      </>
    );
  }
}

export default Count;
