// recupera la lista delle prenotazioni esistenti a db e di presentarle all'utente
//avverrà quindi un caricamento all'avvio della pagina e quando la chiamata get sarà terminata verranno create dinamicamente le righe della nostra lista
import { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap"
const URL = "https://striveschool-api.herokuapp.com/api/reservation"

const Backoffice = function () {
  //definiamo lo stato iniziale

  // state = {
  //  reservations: [], // ospiterà l'elenco delle prenotazioni che arriveranno dalla chiamata GET
  //  isLoading: true,
  //  isError: false,
  // }

  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getReservations = () => {
    //questa funzione dovrà recuperare le prenotazioni a db tramite una fetch GET e salvarle all'interno di reservations nello state

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
        //this.setState({
        //  reservations: data,
        //  isLoading: false,
        //})
        setReservations(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("errore", err)
        //this.setState({
        //  isLoading: false,
        //  isError: true,
        // })
        setIsLoading(false)
        setIsError(true)
      })
  }

  //un altro metodo di lifecyrcle

  // componentDidMount = () => {
  //metodo riservato per i componenti react a classe
  // componentDiMount viene invocato UNA VOLTA SOLA per lifecycle
  // viene eseguito subito dopo la prima invocazione di render()
  //   this.getReservations()
  // }

  useEffect(() => {
    getReservations()
  }, [])

  const deleteReservation = (idToDelete) => {
    fetch(URL + "/" + idToDelete, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("elemento eliminato")
          getReservations() //aggiorno il DOM
        } else {
          throw new Error("elemento non eliminato")
        }
      })
      .catch((err) => {
        console.log("Errore", err)
      })
  }

  // STEP DEL CICLO DI VITA DI BACKOFFICE.JSX
  //1) viene inizializzato lo stato del componente, quindi reservations è []
  //2) viene invocato render() per la prima volta, che disegna la parte statica del componente
  //3) se c'è, viene invocato componentDiMount(), che fa la GET + setState()
  //4) a causa di quel setState, render() viene invocato
  //5) la lista viene riempita con i dati appena messi nello stato

  // this.getReservations() // provo ad invocare getReservation nel render (metodo che si occupa
  // di disegnare l'interfaccia)

  //render() viene automaticamente invocato dal componente a classe, è un metodo di 'lifecycle'
  // viene invocato automaticamente all'avvio della pagina, ma react RE-INVOCA render()
  // ogni volta che cambia lo STATE del componente o le PROPS
  //mai mettere un setState dentro un render!!
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={8} lg={4}>
          <h2 className="text-center">Prenotazioni esistenti</h2>
          <div className="text-center my-3">
            <Button
              variant="warning"
              onClick={() => {
                // this.setState({ isLoading: true })
                setIsLoading(true)
                getReservations()
              }}
            >
              AGGIORNA
            </Button>
          </div>

          {isLoading && (
            <div className="text-center my-3">
              <Spinner variant="primary" animation="border" />
            </div>
          )}

          {isError && <Alert variant="danger">Errore nel recupero dati</Alert>}

          <ListGroup>
            {reservations.length === 0 && // niente prenotazioni
              !isLoading && ( // caricamento finito
                <ListGroup.Item>
                  <div className="text-center">
                    Nessuna prenotazione salvata!
                  </div>
                </ListGroup.Item>
              )}

            {reservations.map((reservationObject) => {
              return (
                <ListGroup.Item
                  key={reservationObject._id}
                  className="d-flex justify-content-between"
                >
                  <div>
                    {reservationObject.name} per{""}{" "}
                    {reservationObject.numberOfPeople}
                  </div>
                  <div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteReservation(reservationObject._id)
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </div>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Backoffice
