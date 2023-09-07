import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Greet } from './pages/welcome/Greet';
import ContactForm from './pages/contact/ContactForm';
import LoginForm from './pages/signup/LoginForm';
import Todo from './pages/todo/Todo';
import ErrorPage from './pages/error/ErrorPage';
import CompletedTasks from './components/todo_components/CompletedTasks';
import PendingTasks from './components/todo_components/PendingTasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='welcome' element={<Greet/>} />
        <Route path='contact' element={<ContactForm/>} />
        <Route path='/' element={<LoginForm/>} />
        <Route path='todo' element={<Todo/>} >
          <Route path='completed' element={<CompletedTasks/>} />
          <Route path='pending' element={<PendingTasks/>} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
