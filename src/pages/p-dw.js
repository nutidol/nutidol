import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import dwOverview from "../images/dw1.jpeg"

import { Image } from "react-bootstrap"

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
      <h2 className="text-center pt-4 pb-2">Data Warehouse Project</h2>
      <p className="text-center text-secondary">Jan 2021 ~ May 2021</p>
      <p className="text-center text-secondary">
        Retail company data warehouse design and implementation.
      </p>
      <h3 className="pb-2">Overview</h3>
      <p>
        Data warehouse (DW) is a special type of database used for reporting and
        data analysis. It is often used as the basis for a decision support
        system (DSS). The whole process including DW and DSS is commonly found
        in many IT-computer projects. The topics in DW include process and
        design, implementation, Online Analytical Processing (OLAP) & Cube
        operations, deployment, and “Extract, Transformation, and Load (ETL)”.
        There are two main outcomes from this project which are DW design from a
        data warehouse designer perspective and dashboard report from a business
        analyst aspect. This project follows the business intelligence process
        as seen in the figure below.
      </p>
      <Image
        src={dwOverview}
        className="class-img-top px-5"
        alt="Cook Burn"
        fluid
      />
      <h3 className="pb-2">As a data warehouse designer</h3>
      <p>
        I and my teammates designed a data warehouse using the 4-steps design
        concept and implement it in Azure SQL Server. Then, ETL with scheduler
        and developed a cube. The video below is a summarise of the DW design
        and all technical aspects involved in the project.
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
            src="https://www.youtube.com/embed/jYXV39CPkis"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
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

      <h3 className="pb-2">As business analyst</h3>
      <p>
        In this part, we presented the rough idea of our DW design and
        implemented the BI reports using Power BI. Some fact findings are shown
        in the dashboard report which you can find in the video below.
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
            src="https://www.youtube.com/embed/vXQzA37s6oA"
            frameborder="0"
            allowfullscreen=""
            className="px-5"
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
