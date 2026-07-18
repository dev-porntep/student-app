<script setup lang="ts">
import { ref } from 'vue'
import LoginView from '@/views/LoginView.vue'
import StudentProfileView from '@/views/StudentProfileView.vue'

type Screen = 'login' | 'profile'

const screen = ref<Screen>('login')
</script>

<template>
  <LoginView v-if="screen === 'login'" @login-success="screen = 'profile'" />
  <StudentProfileView v-else />
</template>
