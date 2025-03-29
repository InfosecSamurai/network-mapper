import React from 'react';

const DeviceNode = ({ device, x, y, onClick }) => {
  return (
    <div 
      className={`device-node ${device.device_type || 'unknown'}`}
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={() => onClick(device)}
    >
      <div className="device-icon">
        {device.device_type === 'router' && '🖧'}
        {device.device_type === 'switch' && '🔀'}
        {device.device_type === 'server' && '💻'}
        {!['router', 'switch', 'server'].includes(device.device_type) && '❓'}
      </div>
      <div className="device-name">{device.hostname || device.ip_address}</div>
    </div>
  );
};

export default DeviceNode;
