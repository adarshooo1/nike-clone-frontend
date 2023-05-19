import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
      };
  
      const res = await fetch(`${API_URL}${endpoint}`, options);
      if (!res.ok) {
        throw new Error('Failed to fetch data from the API.');
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from the API:', error);
      return null; // or throw an error, depending on your requirements
    }
  };
  
  export const makePaymentRequest = async (endpoint, payload) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        throw new Error('Failed to make the payment request.');
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error making the payment request:', error);
      return null; // or throw an error, depending on your requirements
    }
  };