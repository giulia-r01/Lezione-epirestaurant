import { useState } from "react"
import { Container, Row, Col, Alert } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

// Il backender mi da l'oggetto da mandare alle api, che deve contenere
// name
// phone
// numberOfPeople
// smoking
//dateTime
//specialRequest

// ci serve uno stato per memorizzare i dati del form che gli utenti hanno compilato
const ReservationForm = function () {
  //state = {
  // reservation: {
  //   name: "",
  //   phone: "",
  //   numberOfPeople: "1",
  //   smoking: "",
  //   dateTime: false,
  //   specialRequest: "",
  // },
  // }

  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    numberOfPeople: "1",
    smoking: "",
    dateTime: false,
    specialRequest: "",
  })

  // ora dobbiamo collegare i valori delle proprietà inserite nello stato 'reservation
  // gli INPUT CONTROLLATI sono gestiti da un 'two-way-databinding' (a doppia mandata) perché i campi sono collegati sia in lettura che in scrittura
  // lo stato determina cosa l'imput avrà come value (stringa vuota nel nostro caso)
  // ma se noi scriviamo sull'imput aggiorniamo lo stato digitando lettera per lettera, quindi
  // settiamo lo stato, e ciò che viene settato si vedrà nel campo dell'input
  //per svuotare il form andrà 'svuotato' lo stato

  // logica del submit del form
  const handleSubmit = (e) => {
    //usiamo le funzioni freccia per evitare un uso scorretto di this
    e.preventDefault()
    console.log("funziona, tra poco faccio la fetch")
    fetch("https://striveschool-api.herokuapp.com/api/reservation", {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Prenotazione salvata")
          //resetto il form ripristinando lo state alla forma iniziale
          //this.setState({
          // reservation: {
          //   name: "",
          //   phone: "",
          //   numberOfPeople: "1",
          //   smoking: "",
          //   dateTime: false,
          //   specialRequest: "",
          //  },
          // })

          setReservation({
            name: "",
            phone: "",
            numberOfPeople: "1",
            smoking: "",
            dateTime: false,
            specialRequest: "",
          })
        } else {
          throw new Error("La chiamata non ha restituito esito positivo")
        }
      })
      .catch((error) => {
        console.log("si è verificato un errore", error)
      })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* ho collegato al submit del form*/}
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Il tuo nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mario Rossi"
                required
                //colleghiamo il campo nome allo stato del componente
                //collego il valore dell'input name allo stato
                value={reservation.name}
                // collego la modifica dell'input alla modifica dello stato
                onChange={(e) => {
                  //  this.setState({
                  //   reservation: {
                  //     ...this.state.reservation, // fa in modo che riparta dall'attuale contenuto dello //state (quindi non perderò gli step precedenti)
                  //    name: e.target.value, // aggiungo l'attuale contenuto
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>

            {/*RENDERING CONDIZIONALE*/}
            {/*Metodo dello 'SHORT CIRCUIT'*/}
            {reservation.name === "Al Bano" && (
              <Alert variant="info">Un bicchiere di vino con un panino!</Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>N. di telefono</Form.Label>
              <Form.Control
                type="tel"
                required
                value={reservation.phone}
                // collego la modifica dell'input alla modifica dello stato
                onChange={(e) => {
                  // this.setState({
                  //   reservation: {
                  //     ...this.state.reservation,
                  //     phone: e.target.value,
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    phone: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quanti siete?</Form.Label>
              <Form.Select
                aria-label="Numero di persone"
                //collego il valore dell'input name allo stato
                value={reservation.numberOfPeople}
                // collego la modifica dell'input alla modifica dello stato
                onChange={(e) => {
                  // this.setState({
                  //   reservation: {
                  //     ...this.state.reservation,
                  //     numberOfPeople: e.target.value,
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    numberOfPeople: e.target.value,
                  })
                }}
              >
                <option>Open this select menu</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quando venite?</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                value={reservation.dateTime}
                // collego la modifica dell'input alla modifica dello stato
                onChange={(e) => {
                  // this.setState({
                  //   reservation: {
                  //     ...this.state.reservation,
                  //     dateTime: e.target.value,
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    dateTime: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Tavolo fumatori?"
                checked={reservation.smoking}
                // collego la modifica dell'input alla modifica dello stato
                // la proprietà value dei campi checkbox non torna true/false ma on/off (come stringa)
                // poiché le API si aspettano un valore boolenao per la proprietà smoking devo usare checked anziché value
                onChange={(e) =>
                  // this.setState({
                  //   reservation: {
                  //     ...this.state.reservation,
                  //     smoking: e.target.checked,
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    smoking: e.target.checked,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Allergie, intolleranze?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                value={reservation.specialRequest}
                // collego la modifica dell'input alla modifica dello stato
                onChange={(e) => {
                  // this.setState({
                  //   reservation: {
                  //     // dovrei in questo nuovo reservation portarmi dietro
                  //     // anche tutte le altre proprietà che non ho toccato!
                  //     // ovvero:

                  //     // name: this.state.reservation.name,
                  //     // phone: this.state.reservation.phone,
                  //     // smoking: this.state.reservation.smoking,
                  //     // dateTime: this.state.reservation.dateTime,
                  //     // numberOfPeople: this.state.reservation.numberOfPeople,
                  //     // specialeRequests: this.state.reservation.specialRequests

                  //     // ma posso farlo in velocità utilizzando lo spread operator,
                  //     // che crea nel mio nuovo oggetto "guscio" una copia
                  //     // di tutti gli attuali valori di this.state.reservation
                  //     ...this.state.reservation,
                  //     specialRequests: e.target.value,
                  //   },
                  // })
                  setReservation({
                    ...reservation,
                    specialRequests: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Prenota
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ReservationForm
