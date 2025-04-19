import { useContext, useState } from 'react';
import { UserContext } from '../Data/UserContext';

const UpdateUser = () => {

  // Destructure the updateUser function from the UserContext
  const { updateUser } = useContext(UserContext);

  // Set up local state to track the new name entered in the input field
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    
    if (newName.trim()) {
      updateUser(newName); 
      setNewName(''); 
    }
  }

  return (
    <div>
      <h2>User Update</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder='Enter new name'
        />
        
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
