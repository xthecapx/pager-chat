import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState([]);
  const [typers, setTypers] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userList,
        typers, 
        setTypers,
        setUserList: onlineUser => {
          setUserList(state => {
            const currentUser = state.find(user => user === onlineUser);

            if (!currentUser) {
              return [...state, onlineUser];
            } else {
              return state;
            }
          });
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
