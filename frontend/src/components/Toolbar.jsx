import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const Toolbar = () => {
  const { discoverNetwork, saveNetwork } = useContext(NetworkContext);

  const handleDiscover = () => {
    const networkRange = prompt("Enter network range to scan (e.g., 192.168.1.0/24):");
    if (networkRange) {
      discoverNetwork(networkRange);
    }
  };

  const handleSave = () => {
    const networkName = prompt("Enter a name for this network:");
    if (networkName) {
      saveNetwork(networkName);
    }
  };

  return (
    <div className="toolbar">
      <button onClick={handleDiscover}>Discover Network</button>
      <button onClick={handleSave}>Save Network</button>
    </div>
  );
};

export default Toolbar;
