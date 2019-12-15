import React, { Component } from 'react'
import Axios from "axios";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: 'loading'
        };
      }
      componentDidMount() {
        this.getData();
      }
      componentWillUnmount() {}
      getData = () => {
        Axios.get("/").then(res => {
          this.setState({ data: res.data });
        });
      };
    render() {
        return (
            <div>
    <p>Data : {this.state.data}</p>
            </div>
        )
    }
}
