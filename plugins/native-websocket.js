import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

// Как понять это выражение ({ store }, inject) ? 
export default ({ store }, inject) => {
  // Убрал данные по просьбе работодателя
  Vue.use(VueNativeSock, 'wss://XXXXX/event', { store });
    
}


// store,
    // reconnection: true,
    // reconnectionAttempts: 5,
    // reconnectionDelay: 3000,
  // })