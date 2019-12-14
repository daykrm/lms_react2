import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import {A} from "./StyledComponent";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    const { data } = this.state;
    return (
      <div>
        <Container>{data}</Container>
      </div>
    );
  }
}
