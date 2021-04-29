import {ref} from 'vue'
import axios from 'axios'

const useURLlodaer = <T>(url: string) => {
    const result = ref<T | null>(null)
    const lodDing = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    axios.get(url).then((res) => {
        lodDing.value = false
        loaded.value = true
        result.value = res.data
    }).catch((e) => {
        error.value = e
        lodDing.value = false
    })
    return {
        result,
        lodDing,
        loaded,
        error
    }
}
export default useURLlodaer
