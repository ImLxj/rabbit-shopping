// 办理分类数据相关业务
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getSecondaryCategoryApi } from '@/apis/instance'
import { onMounted, ref } from 'vue'

export const useCategory = () => {
  const route = useRoute()
  const secondaryCategory = ref({})
  // 获取二级分类的数据
  const getSecondaryCategory = async (id = route.params.id) => {
    const res = await getSecondaryCategoryApi(id)
    if (res.code === '1') {
      secondaryCategory.value = res.result
    }
  }

  onMounted(() => {
    getSecondaryCategory()
  })

  onBeforeRouteUpdate((to) => {
    getSecondaryCategory(to.params.id)
  })

  return {
    secondaryCategory,
    getSecondaryCategory
  }
} 