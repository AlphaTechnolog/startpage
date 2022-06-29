import { ref, onMounted } from 'vue'

export const useDate = () => {
  const hour = ref<number>(new Date().getHours())
  const minutes = ref<number>(new Date().getMinutes())

  const refreshData = () => {
    hour.value = new Date().getHours()
    minutes.value = new Date().getMinutes()
  }

  onMounted(() => {
    setInterval(() => {
      refreshData()
    }, 1000)
  })

  return { hour, minutes }
}
