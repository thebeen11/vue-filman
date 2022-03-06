import axios from "axios"
//import { MessageBox, Message } from 'element-ui'
import store from "../store/"

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})


// response interceptor
service.interceptors.response.use(
  response => {
    if (!response.data) {
      if (!response.data.data) response.data.data = response.data
      return response
    } else {
      const res = response.data
      if (res.status === 'error') {
        return Promise.reject(new Error(res.message || "Error"))
      }
        else {
        if (typeof response.data === 'object' && response.data !== null) {
          if (!response.data.data) response.data.data = response.data
        }
        return response.data
      }
    }
  },
  error => {
    if (error) {
      if (error.response) {
        if (error.response.status_message) {
          console.log(error.response.status_message);
        }
      }
    }
    return Promise.reject(error)
  }
)


export default service
