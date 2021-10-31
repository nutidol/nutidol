import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import first from "../images/1.jpg"
import second from "../images/2.jpg"
import secondpointfive from "../images/2.5.png"
import third from "../images/3.jpg"
import fourth from "../images/4.jpg"
import fifth from "../images/5.jpg"
import sixth from "../images/6.jpg"
import seventh from "../images/7.jpg"
import eighth from "../images/8.jpg"
import { Link } from "gatsby"

import { Card, Row, Col, Container, Image, Button } from "react-bootstrap"

const SecondPage = () => (
  <div>
    <Header></Header>
    <div
      className="container"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingBottom: `200px`,
      }}
    >
      <Container className="text-center">
        <Row xs={1} md={2} className="g-4 py-4">
          <Col>
            <Card bg="light">
              <Image
                src={first}
                classname="class-img-top"
                alt="Cook Burn"
                fluid
              />
              <Card.Body>
                <Card.Title>Cook Burn Application</Card.Title>
                <Card.Text>
                  A mobile application that generates menus and recipes based on
                  users’ ingredients and preferences. I used the free tier of
                  AWS for backend and React Native for frontend.
                </Card.Text>
                <Link to="/p-cookburn">
                  <Button variant="outline-dark">Read more</Button>
                </Link>
                <Button
                  variant="outline-dark"
                  className="m-1"
                  href="https://youtu.be/mhzyxke2IkU"
                >
                  Watch demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={second}
                classname="class-img-top"
                alt="Data Warehouse"
                fluid
              />
              <Card.Body>
                <Card.Title>Data Warehouse Project</Card.Title>
                <Card.Text>
                  Implemented Data warehouse for retail business and analyzed
                  past data using Power BI.
                </Card.Text>
                <Link to="/p-dw">
                  <Button variant="outline-dark">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={secondpointfive}
                classname="class-img-top"
                alt="Data Science"
                fluid
              />
              <Card.Body>
                <Card.Title>Data Science Project on Azure ML</Card.Title>
                <Card.Text>
                  Advanced analytics on Azure ML related to Data Warehousing
                  Project in Retails.
                </Card.Text>
                <Link to="/p-ds">
                  <Button variant="outline-dark">Read more</Button>
                </Link>
                <Button
                  variant="outline-dark"
                  className="m-1"
                  href="https://youtu.be/OGkc9OhO3Bg"
                >
                  Watch demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={third}
                classname="class-img-top"
                alt="Beat Up"
                fluid
              />
              <Card.Body>
                <Card.Title>Beat Up Application</Card.Title>
                <Card.Text>
                  A prototype mobile application for solving the problem of
                  being bored during the lockdown due to the spread of COVID-19.
                </Card.Text>
                <Link to="/p-bu">
                  <Button variant="outline-dark">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={fourth}
                classname="class-img-top"
                alt="Clover"
                fluid
              />
              <Card.Body>
                <Card.Title>
                  Receipt-Based Reverse Engineering Project
                </Card.Title>
                <Card.Text>
                  Receipt-Based Reverse Engineering for an Enterprise
                  Information System. Me and my classmates reversed engineer the
                  receipt of D'oro coffee shop to obtain an enterprise
                  information system.
                </Card.Text>
                <Link to="/p-eis">
                  <Button variant="outline-dark">Read more</Button>
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={fifth}
                classname="class-img-top"
                alt="CheezyAvocado"
                fluid
              />
              <Card.Body>
                <Card.Title>CheezyAvocado</Card.Title>
                <Card.Text>
                  A web application with an IOT device aiming to tackle the
                  problem of hotel room services.
                </Card.Text>
                <Link to="/p-ca">
                  <Button variant="outline-dark">Read more</Button>
                </Link>{" "}
                <Button
                  variant="outline-dark"
                  className="m-1"
                  href="https://www.youtube.com/watch?v=ku1EKh2EWZY&t=18s&ab_channel=NatSaeTang"
                >
                  Watch overview
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={sixth}
                classname="class-img-top"
                alt="Bin Bin"
                fluid
              />
              <Card.Body>
                <Card.Title>Bin Bin Application</Card.Title>
                <Card.Text>
                  A prototype application that can track and classify users’
                  trashes.
                </Card.Text>
                <Link to="/p-bb">
                  <Button variant="outline-dark">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Image
                src={seventh}
                classname="class-img-top"
                alt="Deer With No Eyes"
                fluid
              />
              <Card.Body>
                <Card.Title>Deer With No Eyes</Card.Title>
                <Card.Text>
                  A mathematic(calculus) quiz application made for android
                  devices from Android Studio.
                </Card.Text>
                <Link to="/p-noidea">
                  <Button variant="outline-dark">Read more</Button>
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg="light">
              {/* <Card.Img variant="top" src="../images/gatsby-icon.png" /> */}
              <Image
                src={eighth}
                classname="class-img-top"
                alt="Automatic Tissue Dispenser"
                fluid
              />
              <Card.Body>
                <Card.Title>Automatic Tissue Dispenser</Card.Title>
                <Card.Text>
                  A prototype of an automatic tissue dispenser that can control
                  the length of dispensed paper towel.
                </Card.Text>
                <Link to="/p-ts">
                  <Button variant="outline-dark">Read more</Button>
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer></Footer>
  </div>
)

export default SecondPage
