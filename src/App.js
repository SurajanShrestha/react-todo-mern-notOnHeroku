import './styles/main.css';
import AddTodoComponent from './components/AddTodoComponent';
import ViewTodoComponent from './components/ViewTodoComponent';

function App() {
  return (
    <div className="App">
      <h3>React TodoList Mern</h3>
      <AddTodoComponent />
      <ViewTodoComponent />
    </div>
  );
}

export default App;
