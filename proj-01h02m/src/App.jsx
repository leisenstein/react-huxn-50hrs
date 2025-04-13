
import './App.css'
import Person from './Components/Person'
import Product from './Components/Product'

function App() {

  return (
    <div>
      <Person name="Larry" age={ 52 } />
      <Product name="Acer 5220" price={1299.99} />
        
    </div>
   
  )
}

export default App
