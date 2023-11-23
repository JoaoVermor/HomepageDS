import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../services/login';
import { Container } from 'react-bootstrap';

function Forms() {
  return (
    <Container className='bg-dark border border-white mb-3'>
    <Form onSubmit={login}>
        <h1 className='text-center text-white '>LOGIN</h1>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-white ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label className="text-white ">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className=" d-grid gap-2 mx-auto" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Forms;