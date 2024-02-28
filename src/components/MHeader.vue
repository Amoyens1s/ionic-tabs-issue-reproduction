<script lang="ts" setup>
import { IonPage } from '@ionic/vue'
</script>

<template>
  <div class="m-header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.m-header {
  padding-top: var(--ion-safe-area-top);
  background: violet;
}
</style>
