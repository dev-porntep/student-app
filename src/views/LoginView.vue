<script setup lang="ts">
import LoginIllustration from '@/components/login/LoginIllustration.vue'
import LoginInput from '@/components/login/LoginInput.vue'
import LoginButton from '@/components/login/LoginButton.vue'
import { useLoginForm } from '@/composables/useLoginForm'
import type { LoginCredentials } from '@/types/auth'

const emit = defineEmits<{
  'login-success': []
}>()

function login(credentials: LoginCredentials) {
  console.log('login submit', credentials)
  emit('login-success')
}

const { form, isSubmitting, handleSubmit } = useLoginForm(login)
</script>

<template>
  <div class="login">
    <LoginIllustration class="login__illustration" />

    <form class="login__form" @submit.prevent="handleSubmit">
      <LoginInput v-model="form.email" label="Email" type="email" placeholder="Email" />
      <LoginInput v-model="form.password" label="Password" type="password" placeholder="Password" />

      <LoginButton class="login__submit" :loading="isSubmitting">ลงชื่อเข้าใช้</LoginButton>
    </form>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 24px 40px;
  box-sizing: border-box;
}

.login__illustration {
  margin-top: 32px;
}

.login__form {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.login__submit {
  margin-top: 12px;
}
</style>
