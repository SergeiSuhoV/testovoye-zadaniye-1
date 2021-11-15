<template>
  <div
    v-loading="isLoading"
    class="auth"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="auth__wrapper">
      <h2 class="auth__title">Авторизация</h2>
      <!-- ref-? :model- в этом объекте храняться поля для введенных или измененных данных // :rules- в этом объекте хранятся правила для проверки полей и не только -->
      <el-form ref="refLoginForm" :model="loginForm" :rules="ruleForm">
        <!-- тут в prop передается поле из объекта с правилами ruleForm  -->
        <el-form-item label="Электронная почта" prop="email">
          <!-- в этом вложенном елементе ипут, v-model двустороннее связывание -->
          <el-input
            v-model="loginForm.email"
            type="email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click.prevent="handlerSubmitForm(loginForm)"
            >Авторизация</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Данные формы почта и пароль
      loginForm: {
        email: '',
        password: '',
      },
      // Правила проверки полей
      ruleForm: {
        email: [
          {
            required: true,
            message: 'Введите адрес электронной почты',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Неправильный адрес электронной почты',
            trigger: ['change', 'blur'],
          },
        ],

        password: [
          {
            required: true,
            message: 'Заполните пароль',
            trigger: 'blur',
          },
          {
            min: 8,
            pattern: /(?=.*[A-Z])/,
            message:
              'Пароль должен содержать минимум 1 заглавную букву и быть длиной не меньше 8 символов на латинском',
            trigger: ['change', 'blur'],
          },
        ],
      },
      // Состояние спинера загрузки
      isLoading: false,
      // Состояние доступности кнопки
    }
  },

  methods: {
    handlerSubmitForm(e) {
      // eslint-disable-next-line no-console
      //
      this.$refs.refLoginForm.validate((valid) => {
        if (valid) {
          this.improvAuth()
        } else {
          // eslint-disable-next-line no-console
          console.log('Ошибка заполнения полей!')
          return false
        }
      })
    },
    // Импровизированная аутентификация
    improvAuth() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$router.push('/')
      }, 2000)
    },
  },
}
</script>
<style lang="scss">
.auth {
  background-color: #2d3a4b;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    max-width: 500px;
    width: 100%;
    padding: 30px;

    .el-form-item__label {
      color: #ffffff;
    }

    .el-button {
      display: block;
      margin: 0px auto;
    }
  }

  &__title {
    color: #ffffff;
    text-align: center;
  }
}
</style>
