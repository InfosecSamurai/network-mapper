const API_BASE = 'http://localhost:8000';

export const apiRequest = async (endpoint, method = 'GET', body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  return response.json();
};

export const discoverNetwork = (networkRange) => {
  return apiRequest('/discover/', 'POST', { network: networkRange });
};

export const saveNetwork = (networkData) => {
  return apiRequest('/topology/', 'POST', networkData);
};

export const getNetworks = () => {
  return apiRequest('/networks/');
};

export const getNetwork = (id) => {
  return apiRequest(`/networks/${id}`);
};
