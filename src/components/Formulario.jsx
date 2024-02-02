import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            minLength={4}
            maxLength={20}
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            minLength={4}
            maxLength={20}
            value={apellido}
            onChange={(e)=> setApellido(e.target.value)}
          />
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su DNI"
            maxLength={8}
            value={dni}
            onChange={(e)=> setDni(e.target.value)}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="correo@correo.com"
            min={15}
            maxLength={30}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Formulario;
