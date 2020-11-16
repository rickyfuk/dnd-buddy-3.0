import Axios from 'axios';
import React from 'react';

class EmailAddressForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            input: {},
            errors: {}
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        
        this.setState({
            input
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let input = {};
        input['email'] = '';
        input['password'] = '';
        this.setState({input:input});
        console.log(this.state.input.email);
        console.log(this.state.input.password);
        alert('You are registered!')
    }

    // validate() {
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;

    //     if (!input["email"]) {
    //         isValid = false;
    //         errors["email"] = "Please enter your email address.";
    //     }
      
    //     if (!input["password"]) {
    //         isValid = false;
    //         errors["password"] = "Please enter your password.";
    //     }

    //     this.setState({
    //         errors: errors
    //     });

    //     return (
    //         isValid
    //     );
    // }
  
    render() {
      return (
        <div className='login'>
            <h2 className='topTitle'>Register Form</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Email Address</label>
                <input 
                    type="text" 
                    value={this.state.input.email} 
                    onChange={this.handleChange} 
                    placeholder='Enter Email'
                    class='form-control'
                />
                {/* <div className="text-danger">{this.state.errors.email}</div> */}
                <label>Password</label>
                <input 
                    type="text" 
                    value={this.state.input.password}
                    onChange={this.handleChange}
                    placeholder='Enter Password'
                    class='form-control'
                />
                {/* <div className="text-danger">{this.state.errors.password}</div> */}
                <input type="submit" value="Register" className='button' />
            </form>
        </div>
      );
    }
  }

  export default EmailAddressForm;