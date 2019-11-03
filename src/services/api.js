import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.103:3001/',
  headers: {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcxNjg0ODY1LCJleHAiOjE1NzIyODk2NjV9.pGmE6S9Xd-Wc3e0v7-Oxb4eM_5rlwzPelG4rHHjeB8U'}`,
  },
});

export default api;
