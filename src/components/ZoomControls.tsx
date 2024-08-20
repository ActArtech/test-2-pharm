import React from 'react';
import { useReactFlow } from 'react-flow-renderer';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ZoomControls: React.FC = () => {
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  return (
    <ControlsContainer>
      <StyledButton onClick={() => zoomIn()}>+</StyledButton>
      <StyledButton onClick={() => zoomOut()}>-</StyledButton>
      <StyledButton onClick={() => fitView()}>Fit</StyledButton>
    </ControlsContainer>
  );
};

export default ZoomControls;