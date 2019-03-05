import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 0;
`;

const StyledChildrenContainer = styled.div`
  position: absolute;
  cursor: auto;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: #999 1px 1px 1px 1px;
  margin-top: 4px;
  z-index: 1;
  display: none;
  ${StyledContainer}:focus & {
    display: block;
  }
`;

function Popover({ anchor, children }) {
  return (
    <StyledContainer tabIndex={1}>
      {anchor}
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContainer>
  );
}

Popover.propTypes = {
  anchor: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popover;
