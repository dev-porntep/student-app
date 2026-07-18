import { reactive, ref } from 'vue'
import type { LoginCredentials } from '@/types/auth'

export function useLoginForm(onSubmit: (credentials: LoginCredentials) => void | Promise<void>) {
  const form = reactive<LoginCredentials>({
    email: '',
    password: '',
  })

  const isSubmitting = ref(false)

  async function handleSubmit() {
    isSubmitting.value = true
    try {
      await onSubmit({ ...form })
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    handleSubmit,
  }
}
