import { Link } from "react-router-dom"
import pastasciutte from "../data/menu.json"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

const Menu = function () {
  return (
    <Container fluid className="px-0">
      <Row className="justify-content-center mt-4">
        {pastasciutte.map((pasta) => {
          return (
            <Col xs={4} md={4} lg={2} key={pasta.id}>
              <Card className="mb-3 d-flex flex-column">
                <Card.Img variant="top" src={pasta.image} />
                <Card.Body>
                  <Card.Title>{pasta.name}</Card.Title>
                  <Card.Text>{pasta.description}</Card.Text>
                  <div className="flex-grow-1">
                    <Badge bg="warning fs-6">{pasta.price}€</Badge>
                  </div>
                  <Link className="btn btn-dark" to={"/details/" + pasta.id}>
                    Vai ai dettagli
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default Menu
