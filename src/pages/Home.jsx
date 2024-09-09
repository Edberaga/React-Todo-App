import { Container, Card, Button } from 'react-bootstrap'
import useLocalStorage from 'use-local-storage';
import './styles.css';

const Home = () => {
  const notes = useLocalStorage("todos", []);

  return (
    <Container className='text-center'>
        <h1 className='mt-5'>Your To Do List</h1>
        <Container className='my-5 notes-section'>
        {notes[0].map((note, index) => (
          <Card key={index} style={{width: "360px"}}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.description}</Card.Text>
              {(note.completed )
              ? <Button variant='success'>Has Been Completed!</Button>
              : <Button variant='danger'>Not Yet Completed.</Button>
              }
            </Card.Body>
          </Card>
        ))}
        </Container>
    </Container>
  )
}

export default Home