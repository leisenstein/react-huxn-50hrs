import './App.css';
import Counter from './Components/Counter';
import Profile from './Components/Profile';
import ShoppingList from './Components/ShoppingList';
import TodoList from './Components/TodoList';

function App() {

  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  )
}

export default App
