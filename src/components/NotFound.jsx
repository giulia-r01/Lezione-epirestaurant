import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <div className="text-center">
      <h2>404 - Pasta non trovata</h2>
      <p>
        Vuoi tornare in <Link to="/index">Home</Link>?
      </p>
      <p>
        Puoi anche utilizzare questo{" "}
        <Button
          variant="dark"
          onClick={() => {
            navigate("/index")
          }}
        >
          BUTTON
        </Button>
      </p>
    </div>
  )
}
export default NotFound
