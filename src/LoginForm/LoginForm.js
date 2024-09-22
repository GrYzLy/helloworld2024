import React, {Component} from 'react'

class LoginForm extends Component {
  constructor(props){
    super()

    this.state = {
     username : "",
     password : "",
     passwordConfirmation : "",
     email : "",
     errors : []
    }

    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)
  }

  validatePasswordOnBlur(event)
  {
    const password = event.target.value
    const errors = this.state.errors
    
    var validate_result = this.validateNotEmpty("Password", password)
    if(validate_result)
    {
      this.setState({password : ""})
      errors.push(validate_result)
    }

    this.setState({password, errors})
  }

  validateUsernameOnBlur(event)
  {
    console.log(event.target.value)
    console.log("Username")

   
    const username = event.target.value
    const errors = this.state.errors

    var validate_result = this.validateNotEmpty("Username", username)

    if(validate_result)
    {
      this.setState({username: ""})
      errors.push(validate_result)
    }

    this.setState({username, errors})
  }

  validatePasswordConfirmationOnBlur(event)
  {
    const passwordConfirmation = event.target.value
    const errors = this.state.errors
    console.log(passwordConfirmation)

    if(passwordConfirmation !== this.state.password)
    {
      errors.push("Password must match!")
    }

    this.setState({passwordConfirmation, errors})
  }

  validateNotEmpty(field, value)
  {
    
    if(!value) {
      return `${field} must be filled out`
    }
  }

  render()
  {
    console.log("Render")
    console.log(this.state)
    return (
      <div>
       <h1>Login form</h1>
       <div>
        Username: <input id="username" type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur}/><br />
        Password confirmation: <input type="text" onBlur={(event) => this.validatePasswordConfirmationOnBlur(event)} /><br />
        Email: <input type="text" /><br />
        <button>Submit</button>
       </div>
       <div>
        Errors!
        {this.state.errors.map((err, index) => <p key={index}>{err}</p>)}
       </div>
      </div>
    )
  }
}


export default LoginForm;
