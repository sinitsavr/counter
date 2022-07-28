import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
      step:1,
      isMode: true,
    }
  }

decrement =()=>{this.setState({count:this.state.count+this.props.step})
}
inctrement=()=>{this.setState({count:this.state.count-this.props.step})
}

handlerMode=()=>{
  this.setState({isMode: !this.state.isMode})
}
  render() {
    
    return(
      <>
      <h1>My Count{this.state.count}</h1>
      <button onClick={this.handlerMode}>mode</button>
     {this.state.isMode ? 
     (<button onClick={this.decrement}>+</button>)
     :
     (<button onClick={this.inctrement}>-</button>)}
      <h2>step is{this.props.step}</h2>
     </>
    )
  }
}

export default Counter;