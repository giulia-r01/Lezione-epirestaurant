import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap"
import pastasciutte from "../data/menu.json"
import { Component } from "react"

class Home extends Component {
  state = {
    activePasta: pastasciutte[0], //carbonara
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h1>Epistaurant</h1>
            <h2>Le migliori pastasciutte del web</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Carousel
              onSlide={(i) => {
                //console.log("funziona?", i) // i è l'indice della slide che sta arrivando e della pasta
                // che sta per comparire, perché genero le slides a partire dalle paste
                //console.log(pastasciutte[i])
                // dovrei settare pastasciutte[i] come nuova activePasta
                // c'è un metodo apposito per cambiare lo stao di un componente
                this.setState({
                  activePasta: pastasciutte[i],
                })
              }}
            >
              {pastasciutte.map((pasta) => {
                return (
                  <Carousel.Item key={pasta.id}>
                    <img
                      src={pasta.image}
                      className="w-100"
                      alt={"immagine di " + pasta.name}
                    />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <ListGroup>
              {this.state.activePasta.comments.map((recensione) => {
                return (
                  <ListGroup.Item key={recensione.id}>
                    {recensione.comment} - {recensione.rating}/5
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Home
