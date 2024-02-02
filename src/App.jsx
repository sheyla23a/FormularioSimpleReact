import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="seccionTitulo">
        <h1 className="formTitulo text-light text-center p-4">Formulario</h1>
      </div>
      <Container className="mt-4">
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
