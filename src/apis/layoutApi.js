import instance from '@/utils/http.js'

// 获取全部分类
export const getCategoryApi = () => {
  return instance({
    method: 'GET',
    url: '/home/category/head'
  })
}