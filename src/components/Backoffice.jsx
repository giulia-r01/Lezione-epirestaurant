// recupera la lista delle prenotazioni esistenti a db e di presentarle all'utente
//avverrà quindi un caricamento all'avvio della pagina e quando la chiamata get sarà terminata verranno create dinamicamente le righe della nostra lista
import { Component } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

class Backoffice extends Component {
  //definiamo lo stato iniziale

  state = {
    reservations: [], // ospiterà l'elenco delle prenotazioni che arriveranno dalla chiamata GET
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={8} lg={6}>
            <h2>Prenotazioni esistenti</h2>
            <ListGroup>
              {this.state.reservations.map((reservationObject) => {
                return (
                  <ListGroup.Item key={reservationObject._id}>
                    {reservationObject.name}
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

export default Backoffice
