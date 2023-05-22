import instance from '@/utils/http.js'

/**
 * @description 获取全部分类
 * @return {*}
 */
export const getCategoryApi = () => {
  return instance({
    method: 'GET',
    url: '/home/category/head'
  })
}

/**
 * @description 获取轮播图数据
 * @return {*}
 */
export const getBannerApi = (params = {}) => {
  // 默认是1 商品是2
  const { distributionSite = '1' } = params
  return instance({
    method: 'GET',
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description 获取新鲜好物
 * @return {*}
 */
export const getNewApi = () => {
  return instance({
    method: 'GET',
    url: '/home/new'
  })
}

/**
 * @description 获取人气推荐
 * @return {*}
 */
export const getHotApi = () => {
  return instance({
    method: 'GET',
    url: '/home/hot'
  })
}

/**
 * @description 获取所有商品模块
 * @return {*}
 */
export const getGoodsListApi = () => {
  return instance({
    method: 'GET',
    url: '/home/goods'
  })
}

/**
 * @description 获取二级分类列表
 * @param {*} id
 * @returns
 */
export const getSecondaryCategoryApi = (id) => {
  return instance({
    method: 'GET',
    url: '/category',
    params: {
      id
    }
  })
}
