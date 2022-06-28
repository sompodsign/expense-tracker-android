import axios from 'axios';

const client = axios.create({
  baseURL: "https://api.shampad.live/api",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default client;
