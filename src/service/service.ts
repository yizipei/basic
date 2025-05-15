import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosHeaders,
} from 'axios'
import qs from 'qs'
import { config } from './serviceConfig'

// 从配置文件中提取相关配置
const { base_url, request_timeout, result_code } = config

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  // 设置基础 URL，所有请求都会在这个地址基础上进行拼接
  baseURL: base_url,
  // 设置请求超时时间（单位：毫秒），超过这个时间还没响应则认为请求失败
  timeout: request_timeout,
  // 允许携带凭证（如 Cookie），用于处理跨域请求时需要传递 Cookie 的情况
  withCredentials: true,
  // 设置默认请求头，这里设置为 application/json，表示发送 JSON 格式的数据
  headers: { 'Content-Type': 'application/json' },
  // 自定义参数序列化函数，用于处理请求参数的序列化
  paramsSerializer: (params: any): string => {
    // 使用 qs 库进行参数序列化，并允许使用点号表示嵌套对象
    return qs.stringify(params, { allowDots: true })
  },
})

// request 拦截器，用于在请求发送前对请求进行处理
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // 获取请求方法，并转换为大写
    const method = config.method?.toUpperCase()
    // 如果是 GET 请求
    if (method === 'GET') {
      // 设置请求头，防止 GET 请求缓存
      config.headers['Cache-Control'] = 'no-cache'
      config.headers['Pragma'] = 'no-cache'
    }
    // 如果是 POST 请求
    else if (method === 'POST') {
      // 获取请求头中的 Content-Type
      const contentType = config.headers['Content-Type'] || config.headers['content-type']
      // 如果 Content-Type 是 application/x-www-form-urlencoded
      if (contentType === 'application/x-www-form-urlencoded') {
        // 如果请求数据存在且不是字符串类型
        if (config.data && typeof config.data !== 'string') {
          // 使用 qs 库将请求数据序列化为 URL 编码格式的字符串
          config.data = qs.stringify(config.data)
        }
      }
    }
    // 返回处理后的配置，继续请求流程
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 如果请求发生错误，返回错误的 Promise
    return Promise.reject(error)
  },
)

// response 拦截器，用于在接收到响应后对响应进行处理
service.interceptors.response.use(
  async (response: AxiosResponse<any>): Promise<any> => {
    // 获取响应数据
    let { data } = response
    // 如果响应数据不存在
    if (!data) {
      // 抛出错误，表示请求没有返回值
      throw new Error()
    }
    // 如果响应的 responseType 是 blob 或 arraybuffer（处理二进制数据，如文件下载）
    if (
      response.request.responseType === 'blob' ||
      response.request.responseType === 'arraybuffer'
    ) {
      // 如果响应的数据类型不是 application/json
      if (response.data.type !== 'application/json') {
        // 直接返回响应数据，进行文件下载等操作
        return response.data
      }
      // 如果响应的数据类型是 application/json，说明可能导出失败，将响应数据转换为 JSON 格式
      data = await new Response(response.data).json()
    }
    // 返回处理后的响应数据
    return data
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 打印错误信息，用于调试
    console.log('err' + error)
    // 获取错误信息
    const { message } = error
    // 显示错误消息提示
    // showToast(message)
    // 返回错误的 Promise，继续错误处理流程
    return Promise.reject(error)
  },
)

// 导出 axios 实例，供其他模块使用
export { service }
