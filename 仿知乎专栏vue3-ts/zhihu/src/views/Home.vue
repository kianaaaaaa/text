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
import { ref, onMounted } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'



/*
*  列表栏
* */
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test专栏1',
    description: '这是test专栏1,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 2,
    title: 'test专栏2',
    description: '这是test专栏2,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 3,
    title: 'test专栏3',
    description: '这是test专栏3,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }, {
    id: 4,
    title: 'test专栏4',
    description: '这是test专栏4,有一段非常有意思的简介,请填一下吧!',
    active: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
const list = testData

</script>
<style>

</style>
