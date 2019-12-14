import React, { Component } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import ajLhin from "../assets/ajLhin.jpg";
import days from "../assets/day.jpg";
import kruwit from "../assets/kruwit.jpg";
import Mail from "../assets/mail.png";

export default class Coach extends Component {
  render() {
    return (
      <div>
        <Container className="MarginTop">
          <center>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ajLhin} height={300} />
                  <Card.Body>
                    <Card.Title className="App-body">
                      อาจารย์ ดร.นฏกร ประมายันต์
                    </Card.Title>
                    <Card.Text className="App-body">
                      <p>
                        <img src={Mail} width={25} /> natakorn.pr@gmail.com
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={days} height={300} />
                  <Card.Body>
                    <Card.Title className="App-body">นายอนุชิต คังดงเค็ง</Card.Title>
                    <Card.Text className="App-body">
                    <p>
                        <img src={Mail} width={25} /> k.anuchit@kkumail.com
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={kruwit} height={300} />
                  <Card.Body>
                    <Card.Title className="App-body">นายวิทยากร ยาสิงห์ทอง</Card.Title>
                    <Card.Text className="App-body">
                    <p>
                        <img src={Mail} width={25} /> wittayakorn@nkk.ac.th
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </center>
        </Container>
      </div>
    );
  }
}
