<template>
  <div class="create-post-page">
    <h4>编辑文章</h4>
    <validate-form @form_submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <Validata-input
          :rules="titleRules" v-model="titleVal"
          placeholder="请输入文章标题"
          tag="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <Validata-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <span class="btn btn-primary">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { GlobalDataProps, PostProps } from '../store/index'
import ValidataInput, { RulesProp } from '@/components/Validatainput.vue'
import validateForm from '@/components/validateForm.vue'

const store = useStore()
const router = useRouter()
const titleRules: RulesProp = [
  {
    type: 'required',
    message: '文章标题不能为空'
  }
]
const contentRules: RulesProp = [
  {
    type: 'required',
    message: '文章详情不能为空'
  }
]

const titleVal = ref('')
const contentVal = ref('')
const onFormSubmit = (result: boolean) => {
  if (result) {
    const { columnId } = store.state.user
    if (columnId) {
      const newPost: PostProps = {
        id: new Date().getTime(),
        title: titleVal,
        content: contentVal,
        columnId,
        createdAt: new Date().toLocaleDateString()
      }
      store.commit('createPost', newPost)
      router.push({
        name: 'column',
        params: { id: columnId }
      })
    }

  }
}
</script>

<style scoped>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}

.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.uploaded-area {
  position: relative;
}

.uploaded-area:hover h3 {
  display: block;
}

.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
