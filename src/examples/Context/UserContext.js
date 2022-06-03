import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();

//export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    loadUserContext: false,
    loadedUserContext: true,
    userName: 'test'
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider