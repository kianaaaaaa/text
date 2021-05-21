<template>
  <div class="min">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <el-image lazy src="http://fxjc.cgbchina.com.cn/images/pc_kv.png" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <Column-list :list='list'></Column-list>
  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted ,computed} from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = useStore<GlobalDataProps>()
const list = computed(()=> store.state.columns)

</script>
<style>

</style>
