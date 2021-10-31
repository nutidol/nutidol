import * as React from "react"
import "./style.css"
import ImportScript from "./importScript"
import { Container } from "react-bootstrap"

const Drawy = () => {
  ImportScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js")
  ImportScript(
    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"
  )
  return (
    <Container>
      <script src="fourier.js"></script>
      <script src="sketch.js"></script>
    </Container>
  )
}

export default Drawy

// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
//     <link rel="stylesheet" type="text/css" href="style.css">
//     <meta charset="utf-8" />

//   </head>
//   <body>
//     <script src="fourier.js"></script>
//     <script src="sketch.js"></script>
//     <h1>h1</h1>

//   </body>
// </html>
