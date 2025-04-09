import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap"
import pastasciutte from "../data/menu.json"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Details = function () {
  const params = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const foundPasta = pastasciutte.find((pasta) => {
      return pasta.id.toString() === params.pastaId
    })
    params.pastaId
    if (!foundPasta) {
      navigate("/404")
    } else {
      setDetails(foundPasta)
      setIsLoading(false)
    }
  }, [])

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          {isLoading ? (
            <Spinner variant="success" animation="border" />
          ) : (
            <Card key={details.id} className="mb-3">
              <Card.Img variant="top" src={details.image} />
              <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>{details.description}</Card.Text>
                <Card.Text>
                  <Badge bg="warning fs-6">{details.price}€</Badge>
                </Card.Text>
                <Link className="btn btn-dark" to={"/menu"}>
                  Torna al menu
                </Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Details
