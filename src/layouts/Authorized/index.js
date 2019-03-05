import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import Avatar from '../../components/Avatar';
import Name from '../../components/Name';
import Header from '../../components/Header';
import Popover from '../../components/Popover';
import UserContext from '../../contexts/User';
import useAuth from '../../hooks/useAuth';
import EditPane from '../EditPane';

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
          <button onClick={signOut}>sign out</button>
        </Popover>
      </Header>

      <EditPane />
    </div>
  );
}

export default Authorized;
