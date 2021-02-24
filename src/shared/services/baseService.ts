import axios, { AxiosResponse } from 'axios'

export default abstract class BaseService {
  protected url: string;

  protected constructor (url: string) {
    this.url = url
  }

  public async getRequest (url: string): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios.get(url).then((resp: any) => {
        resolve(resp)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  public async postRequest (url: string, obj: any): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios.post(url, obj, {
      }).then((resp: any) => {
        resolve(resp)
      })
    })
  }

  public async patchRequest (url: string, obj: any): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios.patch(url, obj).then((resp: any) => {
        resolve(resp)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  public async putRequest (url: string, obj: any): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios.put(url, obj).then((resp: any) => {
        resolve(resp)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  public async deleteRequest (url: string, obj?: any): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios.delete(url).then((resp: any) => {
        resolve(resp)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
}
