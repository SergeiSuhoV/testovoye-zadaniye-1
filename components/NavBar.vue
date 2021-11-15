<template>
  <div class="margin: 0">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal">
      <el-menu-item index="1"
        ><NuxtLink class="nuxt-link" to="/"
          >Главная страница</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="2"
        ><NuxtLink class="nuxt-link" to="/login"
          >Авторизация</NuxtLink
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><NuxtLink class="nuxt-link" to="/store"
          >Магазин</NuxtLink
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/login',
      currentPath: '/',
    }
  },
}
</script>

<style></style>
