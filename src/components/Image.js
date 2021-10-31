import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/KSG_7600.jpg"
    alt="A dinosaur"
    width={400}
    height={400}
    className="rounded-circle"
  />
)
export default Image
