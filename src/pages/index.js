import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "../components/Image"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const IndexPage = ({ data }) => (
  <div>
    <Header></Header>
    <div
      className="container"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingBottom: `200px`,
        // padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: `300px`,
          marginTop: `1.45rem`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <h1 className="text-center">About me</h1>
      {/* <Link to="/">Go back to the homepage</Link>
      <Link to="/page-2">Go back to the page2</Link> */}
      <div className="py-3">
        <p className="py-1">
          Hi!! My name is Nattharika Sae Tang and as you can probably guess from
          my long name, I am Thai. Most people call me by my nickname “Natt”.
          Here are some facts about me. I went to high school at Assumption
          Convent School (ASC101), Bangkok, Thailand, then spent my sophomore
          year at Glendale High School, Springfield, Missouri, USA. I recieved
          B.S. in Information and Communication Engineering at Chulalongkorn
          University, Bangkok, Thailand. Currently, I am pursuing Master’s
          degree in Data Science at the University of Bath, Somerset, England.
        </p>
        {/* <p className="py-1">
          My interests include: - Machine Learning - Software Development -
          Languages - Drawing and Editing - Sports like yoga, pilates, and
          ballet - Korean Entertainment (Dramas, Varieties, Music)
        </p> */}
        <p className="font-weight-bold">My interests include:</p>
        <ul>
          <li>Machine Learning</li>
          <li>Software Development</li>
          <li>Languages</li>
          <li>Drawing and Editing</li>
          <li>Sports like yoga, pilates, and ballet</li>
          <li>Korean Entertainment (Dramas, Varieties, Music)</li>
        </ul>
        <p>
          I may talk about some of these things in my
          <Link to="https://www.youtube.com/channel/UCbec0KgIKzwZ_NizYMh14MQ">
            {" "}
            youtube
          </Link>
          and my <Link to="/projects"> projects</Link>, so make sure to check
          that out.
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "KSG_7600.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
