import axios from 'axios';

const API_BASE_URL = 'https://apis.tollguru.com/toll/v2/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  mode:"no-cors",
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'Q42f4H9r2jpGt4mBqPfD8mLBdb6M3RHJ'
  },
});

const config = {
  baseURL: API_BASE_URL,
  mode:"no-cors",
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'Q42f4H9r2jpGt4mBqPfD8mLBdb6M3RHJ'
  }
};

const api = {
  getRequest: async (endpoint) => {
    try {
      const response = await axiosInstance.get(`${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  postRequest: async (endpoint, body) => {
    try {
      const response = await axiosInstance.post(`${endpoint}`, body, config);
      console.log("responce", response);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      var dummyApiData =  {
        "status": "OK",
        "summary": 
        {
          "route": [
            {
              "location": {
              "lat": 37.01487,
              "lng": -7.93424
              },
              "address": "Philadelphia , Pennsylvania"
            },
            {
              "location": {
              "lat": 38.72639,
              "lng": -9.14949
              },
              "address": "New York ,NY"
            }
          ],
          "rates": {
            "USD": 1,
            "CAD": 1.282985,
            "MXN": 20.281435,
            "INR": 73.069503,
            "AUD": 1.30701,
            "GBP": 0.730355,
            "EUR": 0.827435,
            "NOK": 8.55952,
            "SEK": 8.40025,
            "DKK": 6.15375,
            "PEN": 6.15375,
            "COP": 6.15375,
            "ARS": 6.15375,
            "CLF": 6.15375,
            "CLP": 6.15375,
            "SOL": 6.15375
          },
          "departure_time": 1609507347,
          "fuelPrice": "{\"value\":2.79,\"currency\":\"USD\"}",
          "fuelEfficiency": {
            "city": 28.57,
            "hwy": 22.4,
            "units": "mpg"
          },
          "vehicleType": "2AxlesTaxi",
          "share": { }
        },
      };

      return dummyApiData;
    }
  },
};

export default api;
