import { Container, Row, Col } from "react-bootstrap"

const Home = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1>Epistaurant</h1>
          <h2>Le migliori pastasciutte del web</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
