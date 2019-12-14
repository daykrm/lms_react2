import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default class Aims extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={8}>
              <Card className="MarginTop">
                <Card.Header
                  style={{
                    backgroundColor: "#ff2667",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  <strong>จุดประสงค์การเรียนรู้</strong>
                </Card.Header>
                <Card.Body className="App-body">
                  <p>
                    1.
                    ผู้เรียนมีความรู้ความเข้าใจเกี่ยวกับหลักการเขียนโปรแกรมเบื้องต้น
                    (K)
                  </p>
                  <p>2. ผู้เรียนสามารถวิเคราะห์และออกแบบโปรแกรมได้ (P)</p>
                  <p>
                    3. ผู้เรียนสามารถเขียนโปรแกรมภาษา python เบื้องต้นได้ (P)
                  </p>
                  <p>4. ผู้เรียนมีเจตคติที่ดีต่อการเขียนโปรแกรมคอมพิวเตอร์</p>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
