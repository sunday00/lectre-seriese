import axios, { AxiosInstance } from 'axios'

export default class AxiosService {
  static readonly instance: AxiosInstance = axios.create({
    baseURL: 'http://typescript-vue.web',
    headers: {},
    timeout: 100000,
  })
}