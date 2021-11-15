/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  // тестовые данные
  testDataUsers: [
    {
      id: 1,
      name: 'testOne',
      role: 'testAdmin',
      dateCreate: '14.10.2021 15:44',
    },
  ],
  // данные для api запрос
  storeDataUsers: null,
  // данные для websockets соединения
  storeDataEvent: null,
})

export const getters = {
  getDataUsers(state) {
    return state.storeDataUsers
  },

  getDataEvent(state) {
    return state.storeDataEvent
  },
}

export const mutations = {
  SET_DATA_USERS(state, payload) {
    state.storeDataUsers = payload
  },
  // 
  SOCKET_ONOPEN() {
    console.log('Установленно соединение с вебсокетом...')
  },
  SOCKET_ONMESSAGE(state, payload) {
    // возможно, нужно проверить на строку или объект
    state.storeDataEvent = JSON.parse(payload.data)
    console.log(payload.data)
  },
  SOCKET_ONERROR(state, payload) {
    alert(`Ошибка соединения с websocket > ${payload}`)
  },
}
// {limit = 5, offset = 0}
export const actions = {
  async getUsers({ commit }, payload) {
    try {
      await this.$axios
      // Убрал по просьбе работодателя, его API 
        .get('https://XXXXX/users/list', {
          params: {
            limit: payload.limit,
            offset: payload.offset,
          },
        })
        .then((res) => {
          commit('SET_DATA_USERS', res.data.items)
        })
        .catch((err) => {
          console.log(`Ошибка получения запроса: ${err}`)
        })
    } catch (error) {}
  },
}
