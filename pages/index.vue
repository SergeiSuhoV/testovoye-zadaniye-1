<template>
  <div class="main-pages">
    <el-row >
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
        ><UsersList
      /></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
        ><EventsList
      /></el-col>
    </el-row>
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue'
import EventsList from '../components/EventsList.vue'

export default {
  components: {
    UsersList,
    EventsList,
  },
}
</script>