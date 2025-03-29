import React from 'react';
import { NetworkProvider } from './context/NetworkContext';
import NetworkCanvas from './components/NetworkCanvas';
import Toolbar from './components/Toolbar';
import DeviceDetails from './components/DeviceDetails';
import './App.css';

function App() {
  return (
    <NetworkProvider>
      <div className="App">
        <Toolbar />
        <div className="main-content">
          <NetworkCanvas />
          <DeviceDetails />
        </div>
      </div>
    </NetworkProvider>
  );
}

export default App;
