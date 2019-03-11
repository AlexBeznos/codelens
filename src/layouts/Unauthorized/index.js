import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

function UnauthorizedLayout() {
  const { authWithGoogle } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <button onClick={authWithGoogle}>auth with google</button>
        </div>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default UnauthorizedLayout;
