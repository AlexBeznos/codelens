import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import Avatar from '../../components/Avatar';
import Name from '../../components/Name';
import Header from '../../components/Header';
import UserContext from '../../contexts/User';
import useAuth from '../../hooks/useAuth';

const StyledName = styled(Name)`
  margin-right: 16px;
`;

function Authorized() {
  const { signOut } = useAuth();
  const user = useContext(UserContext);

  return (
    <div>
      <Header>
        <StyledName>{user.displayName}</StyledName>
        <Avatar src={user.photoURL} alt={user.displayName} />
      </Header>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
}

export default Authorized;
