import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ts1 from "../images/tissuedispenser/1.png"
import ts2 from "../images/tissuedispenser/2.png"
import ts3 from "../images/tissuedispenser/3.png"
import ts4 from "../images/tissuedispenser/4.png"

import { Image, Carousel } from "react-bootstrap"

const cookBurnPage = () => (
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
      <h2 className="text-center pt-4 pb-2">Automatic Tissue Dispenser</h2>
      <p className="text-center text-secondary">Jan 2018 ~ May 2018</p>
      <p className="text-center text-secondary">
        Is there any way we can reduce the overuse of the toilet towel?
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        In this project, we introduce the pain point which is the overuse of
        toilet papers (mainly in the toilet, not for hand drying). Our targeted
        group is someone who would be benefited if this problem was solved.
        First is the direct benefit group which could be the building owners or
        people who own public toilets. The second is the indirect benefit group
        which is everyone since solving this problem can reduce the number of
        trees used and in turn, reduce global warming.
      </p>
      <div>
        <div
          className="px-5"
          style={{
            position: "relative",
            paddingTop: "56.25%",
            marginBottom: "50px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/5BTlBf3uuQU"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title="ts"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>

      <h3 className="pb-2">
        How to solve the problem, using the concept of engineering?
      </h3>
      <h4 className="pb-2 px-5">By product</h4>
      <p className="px-5">
        We decided to create an automatic tissue dispenser that can control how
        much paper is dispensed. A microcontroller and a step motor can be used
        to dispense an exact amount of paper. AutoCAD can aid in designing and
        creating a prototype that will be later used for the laser cut. Note
        that the prototype is smaller than the actual product which will be
        large enough to contain a 9-inch roll. The front cover of the prototype
        is also designed like a shape of a tree in order to give a sense of
        environmental care vibes. Arduino program for controlling the step motor
        and LED are introduced as a part of the design process.
      </p>

      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={ts1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={ts2}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={ts3} alt="Third slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={ts4} alt="Forth slide" fluid />
          </Carousel.Item>
        </Carousel>
      </div>

      <h4 className="pb-2 px-5">By campaign</h4>
      <p className="px-5">
        Manage a campaign to raise awareness about the paper we’ve wasted daily
        in the toilet. Our business plan is to start from the Chula community,
        the group of staff members and students in the university, then expand
        to other communities. We would like to present this product to
        sanitaryware shops as well as advertise the eco-friendly view of our
        product and how it can reduce the overuse of toilet paper.
      </p>
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
