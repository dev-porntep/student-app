<script setup lang="ts">
import { computed } from 'vue'
import type { EnrollmentStatus } from '@/types/student'

const props = defineProps<{
  status: EnrollmentStatus
}>()

const labels: Record<EnrollmentStatus, string> = {
  active: 'กำลังศึกษา',
  'on-leave': 'ลาพักการศึกษา',
  graduated: 'จบการศึกษา',
}

const label = computed(() => labels[props.status])
</script>

<template>
  <span class="badge" :class="`badge--${status}`">
    <span class="badge__dot" />
    {{ label }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--profile-ink);
}

.badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
}

.badge--active {
  color: var(--profile-status-active);
}

.badge--on-leave {
  color: var(--profile-status-leave);
}

.badge--graduated {
  color: var(--profile-status-graduated);
}
</style>
