import React, { useContext } from 'react';

import { UserContext } from '../../../Contexts/User';

const Avatar = ({ currentUser = 'default', className }) => {
  const { avatar, avatarLoading } = useContext(UserContext);

  return (
    <div className={className}>
      {avatarLoading[currentUser] && <div className="pager__imageLoader" />}
      {avatar[currentUser] ? (
        <img src={avatar[currentUser]} />
      ) : (
        <img src={avatar['default']} />
      )}
    </div>
  );
};

export default Avatar;
