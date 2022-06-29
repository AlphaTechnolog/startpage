import { ref, onMounted } from 'vue'

export const useDate = () => {
  const hour = ref<number>(0)
  const minutes = ref<number>(0)

  const refreshData = () => {
    hour.value = new Date().getHours()
    minutes.value = new Date().getMinutes()

    if (minutes.value < 10) {
      minutes.value = `0${minutes.value}`
    }
  }

  onMounted(() => {
    refreshData()
    setInterval(() => {
      refreshData()
    }, 1000)
  })

  return { hour, minutes }
}
