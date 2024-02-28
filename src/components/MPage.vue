<script lang="ts" setup>
import { IonPage } from '@ionic/vue'
</script>

<template>
  <ion-page class="m-page">
    <div class="m-page__inner">
      <div class="m-page__header">
        <slot name="header" />
      </div>
      <div class="m-page__content">
        <slot />
      </div>
      <div class="m-page__footer">
        <slot name="footer" />
      </div>
    </div>
  </ion-page>
</template>

<style lang="scss" scoped>
.m-page {
  &__header,
  &__footer {
    background-color: #f5f5f5;
  }
  &__footer {
    border-top: 1px solid #e0e0e0;
  }
  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  &__content {
    flex: 1;
    overflow: auto;
  }
}
</style>
