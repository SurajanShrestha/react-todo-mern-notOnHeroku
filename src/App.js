import { useState } from 'react';
import './styles/main.css';
import AddTodoComponent from './components/AddTodoComponent';
import ViewTodoComponent from './components/ViewTodoComponent';
import DeleteAllBtn from './components/DeleteAllBtn';

function App() {
  const [isLoading, setIsLoading]=useState(false);
  const startLoading=()=>{
    setIsLoading(true);
  };
  const stopLoading=()=>{
    setIsLoading(false);
  };
  return (
    <div className="App">
      {console.log(isLoading)}
      <h3>React TodoList Mern</h3>
      <AddTodoComponent startLoading={startLoading} />
      <div className="deleteAllBtnContainer"><DeleteAllBtn startLoading={startLoading} /></div>
      <ViewTodoComponent isLoading={isLoading} startLoading={startLoading} stopLoading={stopLoading} />
    </div>
  );
}

export default App;
