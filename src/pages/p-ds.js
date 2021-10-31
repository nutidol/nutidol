import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Link } from "gatsby"

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
      <h2 className="text-center pt-4 pb-2">
        Data Science Project on Azure ML
      </h2>
      <p className="text-center text-secondary">Jan 2021 ~ May 2021</p>
      <p className="text-center text-secondary">
        Advanced analytics on Azure ML related to Data Warehousing Project in
        Retails.
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        In this project, we performed ML tasks (prediction, clustering,
        association rule mining, etc.) using the Azure ML platform and propose
        the idea of how we use our model in action. It is somewhat related to
        <Link to="/p-dw"> Data Warehousing Project in Retails</Link>. We chose
        the K-Means Clustering Model, one of the ML models to perform advanced
        analytics on Azure ML. In the video below, you can also find our Market
        Basket Analysis or Association Analysis. With that, we can recommend to
        customers what they should buy after selecting the first item. For
        example, if the user decides to buy milk, we could suggest they buy eggs
        as this item is associated. Next, we could combine associated items to
        increase sales like milk and egg. This analysis could help reorganise
        how the retail store place thing in-store or online to increase the
        chance of selling those associated products.
      </p>
      <blockquote>
        <p>
          For the data set, we used Kaggle, public data, that related to the
          retail domain.
        </p>
      </blockquote>
      <p>
        The main topics that were discussed in the video below are the brief
        summary of each type of machine learning, the introduction to our
        project, the reasons for using Azure ML, applying the K-Means Clustering
        Model with the dataset, and performing the market basket analysis.
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
            src="https://www.youtube.com/embed/OGkc9OhO3Bg"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
            title='ds'
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
      <h3 className="pb-2">Special thanks to</h3>
      <p>
        <ul>
          <li>
            Professor Peerapon Vateekul, PhD for being a very energetic and
            enthusiastic instructor.
          </li>
          <li>TA Supakrit Paoliwat for being a super supportive senior.</li>
          <li>Amy, Dao, and Art for being such great teammates.</li>
        </ul>
      </p>
    </div>
    <Footer></Footer>
  </div>
)
export default cookBurnPage
