<script setup lang="ts">
import { computed } from 'vue'
import type { Student } from '@/types/student'
import StatusBadge from './StatusBadge.vue'

const props = defineProps<{
  student: Student
}>()

const initials = computed(() =>
  props.student.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase(),
)

// Fixed bar widths so the barcode motif is stable, not random per render.
const barcodeBars = [2, 1, 3, 1, 1, 4, 2, 1, 1, 3, 1, 2, 4, 1, 1, 2, 3, 1, 1, 2, 1, 4, 1, 3, 2, 1]
</script>

<template>
  <div class="card">
    <div class="card__trim" />

    <div class="card__body">
      <div class="card__photo">
        <img v-if="student.photoUrl" :src="student.photoUrl" :alt="student.name" />
        <span v-else>{{ initials }}</span>
      </div>

      <div class="card__info">
        <p class="card__name">{{ student.name }}</p>
        <p class="card__id">{{ student.studentId }}</p>
        <p class="card__program">{{ student.program }} · ชั้นปีที่ {{ student.year }}</p>
        <StatusBadge class="card__status" :status="student.status" />
      </div>
    </div>

    <div class="card__barcode" aria-hidden="true">
      <span
        v-for="(width, i) in barcodeBars"
        :key="i"
        class="card__bar"
        :style="{ width: `${width}px` }"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  --card-radius: 20px;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  border-radius: var(--card-radius);
  background: var(--profile-card-face);
  color: var(--profile-ink);
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.55),
    0 2px 0 rgba(255, 255, 255, 0.4) inset;
  overflow: hidden;
}

.card__trim {
  height: 10px;
  background: var(--color-accent);
}

.card__body {
  display: flex;
  gap: 16px;
  padding: 24px 24px 18px;
}

.card__photo {
  flex: none;
  width: 72px;
  height: 88px;
  border-radius: 10px;
  background: var(--profile-card-edge);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--profile-ink-soft);
  overflow: hidden;
}

.card__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card__name {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
}

.card__id {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--profile-ink-soft);
}

.card__program {
  margin: 0;
  font-size: 0.8rem;
  color: var(--profile-ink-soft);
}

.card__status {
  margin-top: 4px;
}

.card__barcode {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 28px;
  padding: 0 24px 14px;
}

.card__bar {
  display: block;
  height: 100%;
  background: var(--profile-ink);
  opacity: 0.75;
}
</style>
