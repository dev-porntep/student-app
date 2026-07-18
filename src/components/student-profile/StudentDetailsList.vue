<script setup lang="ts">
import type { Student } from '@/types/student'

defineProps<{
  student: Student
}>()
</script>

<template>
  <dl class="details">
    <div class="details__row">
      <dt>เกรดเฉลี่ย</dt>
      <dd>{{ student.gpa.toFixed(2) }}</dd>
    </div>
    <div class="details__row">
      <dt>อีเมล</dt>
      <dd>{{ student.email }}</dd>
    </div>
    <div class="details__row">
      <dt>เบอร์โทร</dt>
      <dd>{{ student.phone }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.details {
  width: 100%;
  max-width: 360px;
  margin: 28px auto 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.details__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--color-border);
}

.details__row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.details__row dt {
  font-size: 0.85rem;
  color: var(--color-placeholder);
}

.details__row dd {
  margin: 0;
  font-size: 0.95rem;
  text-align: right;
}
</style>
