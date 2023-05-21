import instance from '@/utils/http.js'

// 获取全部分类
export const getCategoryApi = () => {
  return instance({
    method: 'GET',
    url: '/home/category/head'
  })
}

// 获取轮播图数据
export const getBannerApi = () => {
  return instance({
    method: 'GET',
    url: '/home/banner'
  })
}

// 获取新鲜好物
export const getNewApi = () => {
  return instance({
    method: 'GET',
    url: '/home/new'
  })
}

// 获取人气推荐
export const getHotApi = () => {
  return instance({
    method: 'GET',
    url: '/home/hot'
  })
}