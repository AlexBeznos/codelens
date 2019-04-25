import React, { Suspense, useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import styled from 'styled-components/macro';
import Avatar from '../../components/Avatar';
import Name from '../../components/Name';
import Header from '../../components/Header';
import Popover from '../../components/Popover';
import UserContext from '../../contexts/User';
import useAuth from '../../hooks/useAuth';
import ProjectPage from '../../pages/Project';
import DashboardPage from '../../pages/Dashboard';

const StyledButton = styled.button`
  &:hover {
    background: red;
  }
`;

const StyledName = styled(Name)`
  margin-right: 16px;
`;

function Authorized() {
  const { signOut } = useAuth();
  const user = useContext(UserContext);

  return (
    <div>
      <Header>
        <Popover
          anchor={
            <>
              <StyledName>{user.displayName}</StyledName>
              <Avatar src={user.photoURL} alt={user.displayName} />
            </>
          }
        >
          <StyledButton onClick={signOut}>sign out</StyledButton>
        </Popover>
      </Header>

      <div>
        <Switch>
          <Route exact path="/projects">
            <Suspense fallback="loading...">
              <DashboardPage />
            </Suspense>
          </Route>
          <Route path="/projects/:id">
            <Suspense fallback="loading...">
              <ProjectPage />
            </Suspense>
          </Route>
          <Redirect to="/projects" />
        </Switch>
      </div>
    </div>
  );
}

export default Authorized;
