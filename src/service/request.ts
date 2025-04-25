import { service } from './service'
import { config } from './serviceConfig'
import type { AxiosResponse } from 'axios'

const { default_headers } = config

// 定义请求方法的类型
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// 定义请求配置的类型
interface RequestOptions {
  method?: RequestMethod
  url?: string
  data?: any
  params?: any
  headers?: any
  responseType?: 'json' | 'blob' | 'arraybuffer'
  headersType?: string
  [key: string]: any
}

// 封装请求方法，用于统一处理请求配置
const request = (options: RequestOptions): Promise<AxiosResponse<any>> => {
  // 解构请求配置，提取 headersType 和 headers
  const { headersType, headers, ...otherOptions } = options
  // 使用 service 发起请求
  // 合并请求头，优先使用 headersType 或 default_headers，然后合并 headers
  return service({
    ...otherOptions,
    headers: {
      'Content-Type': headersType || default_headers, // 设置 Content-Type
      ...headers, // 合并其他请求头
    },
  })
}

// 定义请求工具类，提供各种 HTTP 请求方法
export default {
  // GET 请求方法
  get: async <T = any>(option: RequestOptions): Promise<T> => {
    // 发起 GET 请求
    const res = await request({ method: 'GET', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res.data as unknown as T
  },
  // POST 请求方法
  post: async <T = any>(option: RequestOptions): Promise<T> => {
    // 发起 POST 请求
    const res = await request({ method: 'POST', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res.data as unknown as T
  },
  // 原始 POST 请求方法，返回完整的响应对象
  postOriginal: async (option: RequestOptions): Promise<AxiosResponse<any>> => {
    // 发起 POST 请求
    const res = await request({ method: 'POST', ...option })
    // 返回完整的响应对象
    return res
  },
  // DELETE 请求方法
  delete: async <T = any>(option: RequestOptions): Promise<T> => {
    // 发起 DELETE 请求
    const res = await request({ method: 'DELETE', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res.data as unknown as T
  },
  // PUT 请求方法
  put: async <T = any>(option: RequestOptions): Promise<T> => {
    // 发起 PUT 请求
    const res = await request({ method: 'PUT', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res.data as unknown as T
  },
  // 下载文件的请求方法
  download: async <T = any>(option: RequestOptions): Promise<T> => {
    // 发起 GET 请求，设置 responseType 为 blob，用于处理文件下载
    const res = await request({ method: 'GET', responseType: 'blob', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res as unknown as Promise<T>
  },
  // 上传文件的请求方法
  upload: async <T = any>(option: RequestOptions): Promise<T> => {
    // 设置 headersType 为 multipart/form-data，用于文件上传
    option.headersType = 'multipart/form-data'
    // 发起 POST 请求
    const res = await request({ method: 'POST', ...option })
    // 返回响应数据，并将其转换为指定类型
    return res as unknown as Promise<T>
  },
}
