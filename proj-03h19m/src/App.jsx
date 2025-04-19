import './App.css'
import UpdateUser from './Components/UpdateUser';
import UserProfile from './Components/UserProfile';
import { UserProvider } from './Data/UserContext';
function App() {


  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  )
}

export default App
