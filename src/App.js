import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    inputs: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    errors: {
      firstName: false,
      lastName: false,
      email: false,
      password: false
    }
  };

  handleOnBlur = event => {
    const { inputs } = this.state;
    if (inputs[event.target.name].length === 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          [event.target.name]: true
        }
      });
    }
  };

  handleOnChange = event => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [event.target.name]: event.target.value
      },
      errors: {
        ...this.state.errors,
        [event.target.name]: false
      }
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { inputs } = this.state;

    let newErrorsObj = Object.entries(inputs)
      .filter(([key, value]) => {
        return value.length === 0;
      })
      .reduce((obj, [key, value]) => {
        if (value.length === 0) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
        return obj;
      }, {});

    if (Object.keys(newErrorsObj).length > 0) {
      this.setState({
        errors: newErrorsObj
      });
    }
  };

  render() {
    const { inputs, errors } = this.state;
    return (
      <div className="container">
        <div>
          <h1> Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <div className="box box-blue">
            <p>
              <strong style={{ marginRight: "3px" }}>
                {" "}
                Try it free 7 days
              </strong>
              {""}
              <span>then $20/mo. thereafter</span>
            </p>
          </div>
          <form className="box form">
            <div className="control">
              <input
                className={errors.firstName ? "input input-fail" : "input"}
                name="firstName"
                value={inputs.name}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                placeholder="First Name"
                type="text"
              />
              <small>First Name cannot be empty</small>
            </div>
            <div className="control">
              <input
                className={errors.lastName ? "input input-fail" : "input"}
                name="lastName"
                value={inputs.lastName}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                placeholder="Last Name"
                type="text"
              />
              <small>Last Name cannot be empty</small>
            </div>
            <div className="control">
              <input
                className={errors.email ? "input input-fail" : "input"}
                name="email"
                value={inputs.email}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                placeholder="Email"
                type="text"
              />
              <small>Email cannot be empty</small>
            </div>
            <div className="control">
              <input
                className={errors.password ? "input input-fail" : "input"}
                name="password"
                value={inputs.password}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                placeholder="Password"
                type="password"
              />
              <small>Password cannot be empty</small>
            </div>
            <button onClick={this.handleOnSubmit} type="submit">
              Claim your free trial
            </button>
            <small>
              By clicking the button, you are agreeing to our{" "}
              <a href="google.com" target="_blank">
                Terms and Services
              </a>
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
