import { createContext, useState } from "react";

// Create a Context object to hold user data and functions
const UserContext = createContext();

// Create a provider component that will wrap parts of the app needing access to user data
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  const updateUser = (newName) => {
    setUser({ name: newName }); // Replace the user object with a new one containing the updated name
  };

  // Return the provider with user data and update function available to children components
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children} {/* Render all components that are children of this provider */}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };