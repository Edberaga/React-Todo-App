import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import AddNote from './pages/AddNote';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from './context/TodoContext';

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  return (
  <TodoContext.Provider value={{ todos, setTodos }}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='add-note' element={<AddNote/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TodoContext.Provider>
  
  )
}

export default App
