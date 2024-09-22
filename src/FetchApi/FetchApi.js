import React, {Component} from 'react'

class FetchApi extends Component {
  constructor(props){
    super()

    this.state = {
      data : null
    }
  }

componentDidMount()
{
  this.loadProfiles()
}

loadProfiles()
{
  fetch("http://localhost:39635/Profile")
  .then(response => response.json())
  .then(data => this.setState({data : data}, () => console.log(this.state.data)))
}

displayProfile(data)
{
  return (
    <div>
      <div><h2>Name: {data.name}</h2></div>
      <div><img src={data.image} /></div>
      <div>Age: {data.age}</div>
    </div>
  )
}
  render()
  {
    
    return (
      <div>
       Profile: {this.state.clickCounter}
      {this.state.data && this.state.data.map((data, index) => this.displayProfile(data))}
      </div>
    )
  }
}


export default FetchApi;
