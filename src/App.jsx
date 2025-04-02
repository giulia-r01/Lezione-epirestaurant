import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import ReservationForm from "./components/ReservationForm"

function App() {
  return (
    <main>
      <CustomNavbar tema="dark" />
      <ReservationForm />
      <Home />
    </main>
  )
}

export default App
