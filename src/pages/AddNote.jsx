import { useContext, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  console.log(title);
  console.log(description);
  console.log(completed);

  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Before: ", ...todos);
    setTodos([
        ...todos, 
        { id: Date.now(), title, description, completed },
    ]);
    console.log("After: ",...todos);
    navigate("/");
  }

  return (
  <Container>
    <h1 className='mt-5'>Add Todo</h1>
    <Form onSubmit={(e) => { handleSubmit(e) }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Get Software Developer Job"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea" 
          rows={3}
          placeholder={`1. Create amazing project\n2. Apply to Google & Netflix\n3. Crush the Interview`}
          required
        />
      </Form.Group>
      <Form.Check 
        type="checkbox"
        id="completed"
        label="Mark as Completed"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        className="mb-3"
      />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  </Container>
  )
}

export default AddNote