import './App.css'
import Greeting from './Components/Greeting'
import UserStatus from './Components/UserStatus'
import Weather from './Components/Weather'

function App() {


  return (
    <>
      <div>
        <Weather temperature={14} />
        <UserStatus loggedIn={true} isAdmin={false} />
        <Greeting timeOfDay={"morning"} />
      </div>

    </>
  )
}

export default App
