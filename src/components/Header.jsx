import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand href='/'>Check Notes</Navbar.Brand>
          <Navbar.Brand href='/add-note'>Add Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header