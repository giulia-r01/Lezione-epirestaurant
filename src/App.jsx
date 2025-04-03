import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import ReservationForm from "./components/ReservationForm"
import Backoffice from "./components/Backoffice"

function App() {
  return (
    <main>
      <CustomNavbar tema="dark" />
      <Backoffice />
      <ReservationForm />
      <Home />
    </main>
  )
}

export default App
