import React from 'react';
import useAuth from '../../hooks/useAuth';

function Authorized() {
  const { signOut } = useAuth();

  return (
    <div>
      <div>authorized</div>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
}

export default Authorized;
