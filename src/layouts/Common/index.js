import React from 'react';
import firebaseApp from 'firebase/app';
import AuthorizedLayout from '../Authorized';
import UnauthorizedLayout from '../Unauthorized';
import useUser from '../../hooks/useUser';
import UserContext from '../../contexts/User';
import credentials from './credentials';

firebaseApp.initializeApp(credentials);

function CommonLayout() {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return 'loading...';
  }

  return user ? (
    <UserContext.Provider value={user}>
      <AuthorizedLayout />
    </UserContext.Provider>
  ) : (
    <UnauthorizedLayout />
  );
}

export default CommonLayout;
