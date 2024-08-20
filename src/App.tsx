import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import MapCanvas from './components/MapCanvas';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>Pharma Regulatory Affairs Career Map</title>
        <meta name="description" content="Interactive career map for pharmaceutical regulatory affairs professionals" />
      </Helmet>
      <MapCanvas />
    </AppContainer>
  );
}

export default App;import './App.css'