import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: #ff2667;
      color: white;
    }
    `}
        </style>
        <h4>Username</h4>
        <Form.Control
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <h4 className="MarginTop">Password</h4>
        <Form.Control
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <center>
        <Button className="MarginTop" variant="flat" size="lg">
          Login
        </Button>
        </center> 
      </div>
    );
  }
}
