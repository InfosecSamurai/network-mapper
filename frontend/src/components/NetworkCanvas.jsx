import React, { useContext, useEffect, useRef } from 'react';
import { NetworkContext } from '../context/NetworkContext';
import DeviceNode from './DeviceNode';
import '../assets/css/styles.css';

const NetworkCanvas = () => {
  const { network, selectedDevice, setSelectedDevice } = useContext(NetworkContext);
  const canvasRef = useRef(null);
  const connectionsRef = useRef([]);

  useEffect(() => {
    if (network?.topology_data) {
      try {
        const topology = JSON.parse(network.topology_data);
        drawTopology(topology);
      } catch (e) {
        console.error("Error parsing topology data:", e);
      }
    }
  }, [network]);

  const drawTopology = (topology) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear previous connections
    connectionsRef.current.forEach(conn => {
      if (conn && conn.parentNode) {
        conn.parentNode.removeChild(conn);
      }
    });
    connectionsRef.current = [];

    // Position nodes (simple grid layout for demo)
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    const angleStep = (2 * Math.PI) / topology.nodes.length;

    const positionedNodes = topology.nodes.map((node, index) => {
      const angle = index * angleStep;
      return {
        ...node,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    });

    // Draw connections
    topology.links.forEach(link => {
      const sourceNode = positionedNodes.find(n => n.id === link.source);
      const targetNode = positionedNodes.find(n => n.id === link.target);
      
      if (sourceNode && targetNode) {
        const line = document.createElement('div');
        line.className = 'connection-line';
        
        const length = Math.sqrt(
          Math.pow(targetNode.x - sourceNode.x, 2) + 
          Math.pow(targetNode.y - sourceNode.y, 2)
        );
        
        const angle = Math.atan2(
          targetNode.y - sourceNode.y, 
          targetNode.x - sourceNode.x
        ) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${sourceNode.x}px`;
        line.style.top = `${sourceNode.y}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        canvas.appendChild(line);
        connectionsRef.current.push(line);
      }
    });
  };

  return (
    <div className="network-canvas" ref={canvasRef}>
      {network?.topology_data && 
        JSON.parse(network.topology_data).nodes.map((node, index) => (
          <DeviceNode
            key={node.id}
            device={node}
            x={node.x}
            y={node.y}
            onClick={setSelectedDevice}
          />
        ))
      }
    </div>
  );
};

export default NetworkCanvas;
