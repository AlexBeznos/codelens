import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconJavascript from './icons/javascript.svg';
import IconRuby from './icons/ruby.svg';

const iconByMode = {
  javascript: IconJavascript,
  ruby: IconRuby,
};

const StyledContainer = styled(Link)`
  width: 256px;
  height: 256px;
  display: flex;
  position: relative;
  justify-content: center;
  text-decoration: none;
  color: #000;
  overflow: hidden;
`;

const StyledModeImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.6;
`;

const StyledTitle = styled.div`
  margin-top: 48px;
  font-size: 24px;
  text-shadow: 0px 0px 2px #fff;
  z-index: 1;
`;

function ProjectCard({ id, mode, title }) {
  return (
    <StyledContainer to={`/projects/${id}`}>
      <StyledModeImg alt={title} src={iconByMode[mode]} />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
}

export default ProjectCard;
