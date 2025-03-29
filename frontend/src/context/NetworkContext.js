// Add this to the context value object:
value={{
  network,
  selectedDevice,
  setSelectedDevice,
  isLoading,
  error,
  discoverNetwork,
  saveNetwork,
  clearSelection: () => setSelectedDevice(null) // Add this new function
}}
