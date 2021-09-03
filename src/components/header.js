import * as React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Nat Sae Tang</Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/page-2">Projects</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Header
