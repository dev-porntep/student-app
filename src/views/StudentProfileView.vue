<script setup lang="ts">
import StudentIdCard from '@/components/student-profile/StudentIdCard.vue'
import StudentDetailsList from '@/components/student-profile/StudentDetailsList.vue'
import type { Student } from '@/types/student'

const student: Student = {
  name: 'ณภัทร ชัยวัฒน์',
  studentId: '6501012345',
  program: 'วิทยาการคอมพิวเตอร์',
  year: 3,
  gpa: 3.62,
  email: 'napat.c@student.ac.th',
  phone: '081-234-5678',
  status: 'active',
}
</script>

<template>
  <div class="profile">
    <StudentIdCard :student="student" />
    <StudentDetailsList :student="student" />
  </div>
</template>

<style scoped>
.profile {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
