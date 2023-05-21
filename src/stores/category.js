import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layoutApi.js'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
    const res = await getCategoryApi()
    if(res.code === '1') {
      categoryList.value = res.result
    }
  }
  return {
    categoryList,
    getCategory
  }
})