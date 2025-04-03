// recupera la lista delle prenotazioni esistenti a db e di presentarle all'utente
//avverrà quindi un caricamento all'avvio della pagina e quando la chiamata get sarà terminata verranno create dinamicamente le righe della nostra lista
import { Component } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

class Backoffice extends Component {
  //definiamo lo stato iniziale

  state = {
    reservations: [], // ospiterà l'elenco delle prenotazioni che arriveranno dalla chiamata GET
  }

  getReservations = () => {
    //questa funzione dovrà recuperare le prenotazioni a db tramite una fetch GET e salvarle all'interno di reservations nello state

    const URL = "https://striveschool-api.herokuapp.com/api/reservation"
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        console.log("Prenotazioni", data)
        this.setState({
          reservations: data,
        })
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  //un altro metodo di lifecyrcle

  componentDidMount = () => {
    //metodo riservato per i componenti react a classe
    // componentDiMount viene invocato UNA VOLTA SOLA per lifecycle
    // viene eseguito subito dopo la prima invocazione di render()
    this.getReservations()
  }

  // STEP DEL CICLO DI VITA DI BACKOFFICE.JSX
  //1) viene inizializzato lo stato del componente, quindi reservations è []
  //2) viene invocato render() per la prima volta, che disegna la parte statica del componente
  //3) se c'è, viene invocato componentDiMount(), che fa la GET + setState()
  //4) a causa di quel setState, render() viene invocato
  //5) la lista viene riempita con i dati appena messi nello stato

  render() {
    // this.getReservations() // provo ad invocare getReservation nel render (metodo che si occupa
    // di disegnare l'interfaccia)

    //render() viene automaticamente invocato dal componente a classe, è un metodo di 'lifecycle'
    // viene invocato automaticamente all'avvio della pagina, ma react RE-INVOCA render()
    // ogni volta che cambia lo STATE del componente o le PROPS
    //mai mettere un setState dentro un render!!
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
