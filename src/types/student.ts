export type EnrollmentStatus = 'active' | 'on-leave' | 'graduated'

export interface Student {
  name: string
  studentId: string
  program: string
  year: number
  gpa: number
  email: string
  phone: string
  status: EnrollmentStatus
  photoUrl?: string
}
