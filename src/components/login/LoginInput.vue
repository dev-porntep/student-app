<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  type?: string
  placeholder?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label class="field">
    <span class="field__label">{{ label }}</span>
    <input
      class="field__input"
      :type="type ?? 'text'"
      :placeholder="placeholder ?? label"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<style scoped>
.field {
  display: block;
  width: 100%;
}

.field__label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
}

.field__input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text);
  font-size: 1rem;
}

.field__input::placeholder {
  color: var(--color-placeholder);
}

.field__input:focus {
  outline: none;
  border-color: var(--color-accent);
}
</style>
