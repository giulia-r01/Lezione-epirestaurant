import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const CustomNavbar = function (props) {
  const location = useLocation()

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
    >
      <Container fluid>
        <Link className="navbar-brand" to="/index">
          Epistaurant
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={
                location.pathname === "/prenota"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/prenota"
            >
              Prenota
            </Link>
            <Link
              className={
                location.pathname === "/admin" ? "nav-link active" : "nav-link"
              }
              to="/admin"
            >
              Amministrazione
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar
