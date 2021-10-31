import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import bb1 from "../images/binbin/1.png"
import bb2 from "../images/binbin/2.png"
import bb3 from "../images/binbin/3.png"
import bb4 from "../images/binbin/4.png"
import bb5 from "../images/binbin/5.png"
import bb6 from "../images/binbin/6.png"
import bb7 from "../images/binbin/7.png"
import bb8 from "../images/binbin/8.png"
import bb9 from "../images/binbin/9.png"
import bb10 from "../images/binbin/10.png"
import bb11 from "../images/binbin/11.png"

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
      <h2 className="text-center pt-4 pb-2">Bin Bin Application</h2>
      <p className="text-center text-secondary">Jan 2019 ~ May 2019</p>
      <p className="text-center text-secondary">
        Have enough amount of the trashes been turned into something valuable?
      </p>
      <p>
        We asked some of our friends about their thoughts related to valuable
        trash which is in the video below. After we ask those people directly,
        we sent out the questionnaire and 154 people did it. The first question
        is that do they usually separate their trash (“at home”) and about 44 per
        cent of them do separately. And after that, we asked people who separate
        the trash which is about 68 people. Do they sell their trash? and 11 of
        them sell.
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
            src="https://www.youtube.com/embed/bq9hA5ubu8w"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title="bb"
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

      <h3 className="pb-2">Objective</h3>
      <p>
        To create awareness to Thai people about the value of their trash. We
        introduced a prototype of a mobile application called BinBin. The
        application allows users to check the store near them where they can
        actually turn their trash into cash.
      </p>
      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={bb1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={bb2}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bb3} alt="Third slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bb4} alt="Forth slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bb5} alt="Fifth slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bb6} alt="Sixth slide" fluid />
          </Carousel.Item>
        </Carousel>
      </div>
      <h3 className="pb-2">Future Plan</h3>
      <p>
        For the Future Plan, we divided it into 3 waves. The period of one wave
        is 6 months. In the first wave, we want to increase the number of
        customers by using online and offline marketing and also doing
        promotions. For the second wave, we still need to increase the number of
        customers but for this wave, VC needs to be found to invest in our
        project. Finally, in phase 3, we would like to go beyond our limit by
        partnering with other business plants.
      </p>
      <Image src={bb7} className="class-img-top px-5" alt="future plan" fluid />
      <h3 className="pb-2">Cost and Budget</h3>
      <p>
        The expectation of a growth rate in sales in the first wave is 0.5% per
        month. Also, the Promotion cost is proportional to the sale income. In
        this wave, you can see that the overall revenue is negative.
      </p>
      <Image
        src={bb8}
        className="class-img-top px-5"
        alt="Cost Budget 1"
        fluid
      />
      <p>
        For the second wave, The expectation growth rate of this period is
        arithmetic sequence increasing by 0.1% so, at the twelfth month, it
        supposes to be 1.1%. And we expected that we will get a fund from VC in
        the seventh month so the cumulative revenue is increasing sharply in the
        initial of the second wave.
      </p>
      <Image
        src={bb9}
        className="class-img-top px-5"
        alt="Cost Budget 2"
        fluid
      />
      <p>
        This is the graph showing the sales, total Expenses, and Cumulative
        Revenue. As you can see that cumulative revenue is dramatically
        increasing at the joint between first and second waves because of
        finding VC. For the worst case, if we cannot find VC, we have to run the
        application till about the ninth month so the application tends to make
        a profit.
      </p>
      <Image
        src={bb10}
        className="class-img-top px-5"
        alt="Cost Budget 2"
        fluid
      />
      <p>
        In the third wave, we aim to be a platform from business to business. By
        being so, we need to link a waste business to another business that has
        a need for waste as a raw material.
      </p>
      <Image
        src={bb11}
        className="class-img-top px-5"
        alt="Cost Budget 2"
        fluid
      />
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
