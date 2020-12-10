import './App.css';
import TodoInput from './Components/Todoinput';
import TodoList from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>
    </div>
);
}

export default App;
