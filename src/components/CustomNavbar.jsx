import { Navbar, Container, Nav } from "react-bootstrap"

const CustomNavbar = function (props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
    >
      <Container fluid>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Prenota</Nav.Link>
            <Nav.Link href="#pricing">Amministrazione</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
