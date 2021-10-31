import * as React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Header = () => (
  <Navbar bg="black" variant="dark">
    <Container
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Navbar.Brand>Nat Sae Tang</Navbar.Brand>
      <Nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Header
