import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "91e04a092b5541bd8bdc5d9da60bbd56",
  },
});

class APIClient<T> {
  endPoint: string;
  
  constructor(endPoint: string){
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endPoint, config)
    .then(res => res.data)
  }
}

export default APIClient