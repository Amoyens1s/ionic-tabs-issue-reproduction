<template>
  <ion-page>
    <home-page :class="{ view: true, active: tab === 'home' }" />
    <feed-page :class="{ view: true, active: tab === 'feed' }" />
    <message-page :class="{ view: true, active: tab === 'message' }" />
    <div class="footer">
      <button type="button" @click="tab = 'home'">Home</button>
      <button type="button" @click="tab = 'feed'">Feed</button>
      <button type="button" @click="tab = 'message'">Message</button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import HomePage from './home.vue'
import FeedPage from './feed.vue'
import MessagePage from './message.vue'
import { ref } from 'vue'
const tab = ref('home')
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  button {
    height: 50px;
    width: 80px;
  }
}

.view {
  display: none;
  &.active {
    display: block;
  }
}
</style>
