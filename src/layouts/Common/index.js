import React from 'react';
import firebaseApp from 'firebase/app';
import AuthorizedLayout from '../Authorized';
import UnauthorizedLayout from '../Unauthorized';
import useUser from '../../hooks/useUser';
import credentials from './credentials';

firebaseApp.initializeApp(credentials);

function CommonLayout() {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return 'loading...';
  }

  return user ? <AuthorizedLayout /> : <UnauthorizedLayout />;
}

export default CommonLayout;
