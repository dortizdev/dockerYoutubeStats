import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet, statistics',
    key: process.env.REACT_APP_KEY
  }
});