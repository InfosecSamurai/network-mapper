import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { NetworkProvider } from './context/NetworkContext';

// Mock the child components to simplify testing
jest.mock('./components/NetworkCanvas', () => () => <div>NetworkCanvas</div>);
jest.mock('./components/Toolbar', () => () => <div>Toolbar</div>);
jest.mock('./components/DeviceDetails', () => () => <div>DeviceDetails</div>);

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <NetworkProvider>
        <App />
      </NetworkProvider>
    );
    expect(screen.getByText('Toolbar')).toBeInTheDocument();
    expect(screen.getByText('NetworkCanvas')).toBeInTheDocument();
    expect(screen.getByText('DeviceDetails')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <NetworkProvider>
        <App />
      </NetworkProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
