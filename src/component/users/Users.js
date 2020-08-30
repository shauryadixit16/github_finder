import React, { useContext } from 'react';
import Useritem from './Useritem';
import githubContext from '../../context/github/githubContext';
const Users = () => {
  const githubcontext = useContext(githubContext);
  return githubcontext.loading ? (
    <div>Spinner</div>
  ) : (
    <div style={userStyle}>
      {githubcontext.users.map((user) => (
        <Useritem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
