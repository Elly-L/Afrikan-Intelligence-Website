// Mock axios client for static deployment
export const createAxiosClient = (config) => {
  const { baseURL, headers, token, interceptResponses } = config;
  
  const client = {
    baseURL,
    headers: headers || {},
    token,
    
    async get(url) {
      console.log(`Mock API call: GET ${baseURL}${url}`);
      
      // Return mock data for public settings
      if (url.includes('/public-settings/by-id/')) {
        return {
          id: 'mock-app-id',
          public_settings: {
            requires_auth: false,
            allow_guest_access: true
          }
        };
      }
      
      throw new Error(`Mock API endpoint not implemented: ${url}`);
    },
    
    async post(url, data) {
      console.log(`Mock API call: POST ${baseURL}${url}`, data);
      throw new Error(`Mock API endpoint not implemented: ${url}`);
    },
    
    async put(url, data) {
      console.log(`Mock API call: PUT ${baseURL}${url}`, data);
      throw new Error(`Mock API endpoint not implemented: ${url}`);
    },
    
    async delete(url) {
      console.log(`Mock API call: DELETE ${baseURL}${url}`);
      throw new Error(`Mock API endpoint not implemented: ${url}`);
    }
  };
  
  return client;
};