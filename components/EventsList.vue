<template>
  <div class="container">
    <h2 class="container__title">События</h2>

    <!-- {{ listEvents }} -->
    <el-table v-loading="false" :data="actionsData" class="container__table">
      <el-table-column label="Дата" prop="ctime" />
      <el-table-column label="Событие" prop="event" />
    </el-table>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  // new Date().toLocaleString() где и как правильно конвертить время в данном контексте?
  data() {
    return {
      actionsData: [],
    }
  },

  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'SOCKET_ONMESSAGE') {
        this.setDataEvents(JSON.parse(mutation.payload.data))
      }
    })
  },
  methods: {
    setDataEvents(data) {
      this.actionsData.push(...[data])
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0;
  padding: 0 30px;

  &__title {
    text-align: center;
  }
}

.pagination {
  padding: 20px 0;
  text-align: center;
}
</style>
