import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState(['default']);
  const [typers, setTypers] = useState({});
  const [messages, setMessages] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [avatar, setAvatar] = useState({});
  const [avatarLoading, setAvatarLoading] = useState({ 'default': false });

  return (
    <UserContext.Provider
      value={{
        avatar,
        avatarLoading,
        messages,
        setAvatar: (user, avatar) => {
          setAvatar(state => {
            return {
              ...state,
              [user]: avatar
            };
          });
        },
        setAvatarLoading,
        setMessages: message => {
          setMessages(state => {
            return [...state, { ...message, date: new Date(message.time) }];
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
