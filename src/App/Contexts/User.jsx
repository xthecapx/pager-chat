import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState([]);
  const [typers, setTypers] = useState({});
  const [messages, setMessages] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [avatar, setAvatar] = useState();

  return (
    <UserContext.Provider
      value={{
        avatar, 
        messages,
        setAvatar,
        setMessages: message => {
          setMessages(state => {
            return [...state, message];
          });
        },
        setStickers,
        setTypers,
        setUser,
        setUserList: onlineUser => {
          setUserList(state => {
            const currentUser = state.find(user => user === onlineUser);

            if (!currentUser) {
              return [...state, onlineUser];
            } else {
              return state;
            }
          });
        },
        stickers,
        typers,
        user,
        userList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
