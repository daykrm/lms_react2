import React, { Component } from "react";
import { Row, Col, Container} from "react-bootstrap";
import Article from "./Article";
import Test from "./Test";

export default class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <h4 className="MarginTop">Computing science - Nakorn Khon Kaen School</h4>
        </center>
        <Test/>
      </div>
    );
  }
}
