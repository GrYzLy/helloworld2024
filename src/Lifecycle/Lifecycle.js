import React, {Component} from 'react'

class Lifecycle extends Component {
  
  
  constructor(props){
    super()
    
    this.state = {
      cycle : 0
    }

    this.title = "Lifecycle"

  console.log("Constructor")
  console.log(this.title)
  }

  componentDidMount() {
    console.log("componentDidMount")
    console.log(this.state.cycle)

    setInterval(() => this.setState({cycle : this.state.cycle + 1}), 10000)

  }

  componentDidUpdate(prevProps,prevState) {
    console.log("componentDidUpdate")
    console.log("Cycle:" + this.state.cycle)

    console.log("prevProp", prevProps)
    console.log("prevState", prevState)
  }

  setTitle()
  {
    console.log(this.title)
    this.title = "New lifecycle"
    console.log(this.title)
  }

  render()
  {
    console.log("Render")
    return (
      <div>
        <h1>{this.title}</h1>
        Cycle: {this.state.cycle}
        <button onClick={() =>  this.setTitle()}>New title</button>
      </div>
    )
  }
}


export default Lifecycle;
