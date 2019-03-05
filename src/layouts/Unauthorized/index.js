import React from 'react';
import useAuth from '../../hooks/useAuth';

function UnauthorizedLayout() {
  const { authWithGoogle } = useAuth();

  return (
    <div>
      <button onClick={authWithGoogle}>auth with google</button>
    </div>
  );
}

export default UnauthorizedLayout;
