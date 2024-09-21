import React, {Component} from 'react'

class GrettingsClass extends Component {
  constructor(props){
    super()
  }
  render()
  {
    return (
      <div>
        From class greetings: {this.props.name}
      </div>
    )
  }
}


export default GrettingsClass;
