import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre"  minLength={4} maxLength={20}/>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido"  minLength={4} maxLength={20} />
          <Form.Label>DNI</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su DNI" maxLength={8}/>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="correo@correo.com" min={15} maxLength={30}/>
        </Form.Group>
        <div className="text-center">
          <Button variant="dark" type='submit'>Enviar</Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
