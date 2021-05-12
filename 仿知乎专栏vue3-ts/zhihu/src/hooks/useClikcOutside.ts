import { onMounted, onUnmounted, ref, Ref } from 'vue'

const useClikcOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClikcOutside = ref(false)
  const handle = (e: MouseEvent) => {
    if (elementRef.value) {
      isClikcOutside.value = !elementRef.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
  return isClikcOutside
}
export default useClikcOutside
