<template>
  <m-page>
    <template #header>
      <m-header>主页</m-header>
    </template>
    <div v-for="e in 100" :key="e">主页</div>
  </m-page>
</template>

<script setup lang="ts">
import MPage from '@/components/MPage.vue'
import MHeader from '@/components/MHeader.vue'
</script>
