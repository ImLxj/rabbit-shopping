// 封装banner的业务代码
import { onMounted, ref } from 'vue'
import { getBannerApi } from '@/apis/instance'
export const useBanner = () => {
  const bannerList = ref([])
  // 获取banner轮播图数据
  const getBanner = async () => {
    const res = await getBannerApi({
      distributionSite: 2
    })
    if (res.code === '1') {
      bannerList.value = res.result
    }
  }

  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}