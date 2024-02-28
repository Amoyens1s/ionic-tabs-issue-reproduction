import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue, isPlatform } from '@ionic/vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Theme variables */
import './theme/variables.css'

import { SafeArea } from 'capacitor-plugin-safe-area'
import { StatusBar, Style } from '@capacitor/status-bar'

const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(async () => {
  await init()
  app.mount('#app')
})

async function init() {
  if (isPlatform('hybrid')) {
    StatusBar.setStyle({ style: Style.Light })
    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      for (const [key, value] of Object.entries(insets)) {
        document.documentElement.style.setProperty(
          `--ion-safe-area-${key}`,
          `${value}px`
        )
      }
    })

    SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
      console.log(statusBarHeight, 'statusbarHeight')
    })

    await SafeArea.addListener('safeAreaChanged', (data) => {
      const { insets } = data
      for (const [key, value] of Object.entries(insets)) {
        document.documentElement.style.setProperty(
          `--ion-safe-area-${key}`,
          `${value}px`
        )
      }
    })
  } else {
    const ins = ['top', 'bottom', 'left', 'right']
    ins.forEach((key) => {
      document.documentElement.style.setProperty(
        `--ion-safe-area-${key}`,
        '0px'
      )
    })
  }
}
