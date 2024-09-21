import React, {Component} from 'react'

class CounterClass extends Component {
  constructor(props){
    super()

    this.state = {
      clickCounter : 0
    }
  }

  render()
  {
    console.log(this.state.clickCounter)
    return (
      <div>
       Counter: {this.state.clickCounter}
       <button name="+1" onClick={() => this.setState({clickCounter : this.state.clickCounter + 1})}>+1</button>
      </div>
    )
  }
}


export default CounterClass;
