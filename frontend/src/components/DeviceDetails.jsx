import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const DeviceDetails = () => {
  const { selectedDevice } = useContext(NetworkContext);

  if (!selectedDevice) {
    return (
      <div className="DeviceDetails">
        <p>Select a device to view details</p>
      </div>
    );
  }

  return (
    <div className="DeviceDetails">
      <h3>Device Details</h3>
      <p><span className="property">IP Address:</span> {selectedDevice.ip_address}</p>
      <p><span className="property">MAC Address:</span> {selectedDevice.mac_address}</p>
      <p><span className="property">Hostname:</span> {selectedDevice.hostname}</p>
      <p><span className="property">Vendor:</span> {selectedDevice.vendor}</p>
      <p><span className="property">Type:</span> {selectedDevice.device_type}</p>
    </div>
  );
};

export default DeviceDetails;
