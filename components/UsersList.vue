<template>
  <div class="container">
    <h2 class="container__title">Список пользователей</h2>
    <el-table
      v-loading="isLoadingUsers"
      :data="dataUsers"
      class="container__table"
    >
      <el-table-column label="ID" prop="id" width="60"> </el-table-column>
      <el-table-column label="Имя" prop="name" width="180"> </el-table-column>
      <el-table-column label="Роль" prop="role" width="60"> </el-table-column>
      <el-table-column
        label="Дата создания"
        prop="ctime"
        width="120"
        type="data"
      >
      </el-table-column>
      <el-table-column label="Действия">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click.prevent="handleDeleteUser(scope.$index)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="30"
      @current-change="handleChangeCurrentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      // спинер загрузки данных
      isLoadingUsers: false,
      // Тут должен быть массив с объектами
      dataUsers: [],
    }
  },

  mounted() {
    this.getUsers({
      limit: 5,
      offset: 0,
    })
  },
  // Как ctime правильно положить? В каком промежутке логики? 
  methods: {
    setDataUsers(data) {
      console.log( new Date().toLocaleString(data.ctime))
      this.dataUsers.push(...data)
    },
    getUsers(dataSettings) {
      this.isLoadingUsers = true
      this.$store
        .dispatch('getUsers', dataSettings)
        .then(() => {
          console.log('ok request api')
          this.setDataUsers(this.$store.getters.getDataUsers)
        })
        .catch((e) => console.log(this))
        .finally(() => {
          this.isLoadingUsers = false
        })
    },
    handleDeleteUser(index) {
      this.dataUsers.splice(index, 1)
    },

    handleChangeCurrentPage(e) {
      this.dataUsers = []
      this.getUsers({
        limit: 5,
        offset: e * 5 - 5,
      })
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
