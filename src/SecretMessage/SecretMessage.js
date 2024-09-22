import React, {Component} from 'react'
import Message from './Message'


class SecretMessage extends Component {
  constructor(props){
    super()

    this.state = {
      showSecret : false
    }
  }

  handleShowSecret()
  {
    if(this.state.showSecret)
    {
    return (<div>I'm secret message</div>)
    }
  }

  render()
  {
    return (
      <div>
        <h1>SecretMessage</h1>
        {/* {this.handleShowSecret()} */}
        <button onClick={() => this.setState({showSecret : !this.state.showSecret})}>{this.state.showSecret ? <p>Hide</p> : <p>Show</p>}</button>
        {this.state.showSecret && <Message />}

      </div>
    )
  }
}


export default SecretMessage;
