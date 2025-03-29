import React, { createContext, useState, useContext } from 'react';
import { discoverNetwork as apiDiscover, saveNetwork as apiSave } from '../services/networkService';

const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const discoverNetwork = async (networkRange) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiDiscover(networkRange);
      setNetwork(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNetwork = async (name) => {
    if (!network) return;
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiSave({ ...network, name });
      setNetwork(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NetworkContext.Provider
      value={{
        network,
        selectedDevice,
        setSelectedDevice,
        isLoading,
        error,
        discoverNetwork,
        saveNetwork
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => useContext(NetworkContext);
