import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../../Contexts/User';

const Avatar = ({ currentUser, className }) => {
  const { user, avatar, setAvatar } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`https://ui-avatars.com/api/?name=${currentUser || user}`, { responseType: 'blob' })
      .then(response => {
        setAvatar(URL.createObjectURL(response.data));
      });
  }, []);

  return <div className={className}>{avatar && <img src={avatar} />}</div>;
};

export default Avatar;
