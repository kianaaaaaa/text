<template>

  <Column-list :list='list'></Column-list>

</template>

<script lang="ts" setup>
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue' // @ is an alias to /src

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
