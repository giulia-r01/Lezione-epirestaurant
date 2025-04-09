import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import ReservationForm from "./components/ReservationForm"
import Backoffice from "./components/Backoffice"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound"
import Menu from "./components/Menu"
import Details from "./components/Details"

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100">
        <CustomNavbar tema="dark" />
        <div className="flex-grow-1">
          <Routes>
            <Route element={<Home />} path="/index" />
            <Route element={<ReservationForm />} path="/prenota" />
            <Route element={<Backoffice />} path="/admin" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<Details />} path="/details/:pastaId" />{" "}
            {/*Rotta PARAMETRICA (: fondamentali)*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
