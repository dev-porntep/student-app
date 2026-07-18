---
description: Create a Student Profile component with distinctive frontend design
---

ใช้ skill `frontend-design` ก่อน แล้วสร้าง component **Student Profile** สำหรับแอป Vue 3 + TypeScript นี้ (`student-app`)

## โจทย์

หัวข้อ: หน้า/การ์ดโปรไฟล์นักศึกษาในแอปสายวิชาการ กลุ่มผู้ใช้: นักศึกษาที่เช็คข้อมูลตัวเอง หรืออาจารย์ที่ปรึกษา/อาจารย์ที่ดูข้อมูลนักศึกษาแบบผ่านๆ หน้าที่หลักของหน้านี้: แสดงว่านักศึกษาคนนี้คือใครและสถานะทางวิชาการโดยรวม

เนื้อหาที่ต้องมี (ใส่ข้อมูล placeholder ที่สมจริงถ้าไม่มีให้):
- ชื่อ, รหัสนักศึกษา, รูปโปรไฟล์/avatar
- สาขา/วิชาเอก, ชั้นปี/ระดับ
- GPA หรือสถานะทางวิชาการ
- ข้อมูลติดต่อ (email, เบอร์โทร)
- สถานะการลงทะเบียน (active, ลาพัก, จบการศึกษา ฯลฯ)

## ข้อกำหนด

- ทำตามโครงสร้างเดิมของโปรเจกต์: ชิ้นส่วนที่ reuse ได้ไปไว้ `src/components/`, การประกอบระดับหน้าไว้ `src/views/`, type ที่ใช้ร่วมกันไว้ `src/types/`, logic ที่มี state ไว้ `src/composables/` ถ้าจำเป็น
- ใช้ `<script setup lang="ts">`, typed props, ห้ามใช้ `any`
- ดีไซน์ห้ามออกมาแบบ AI template ทั่วไป (ครีม+serif, ดำ+neon accent, หรือ layout เส้นบางแบบหนังสือพิมพ์) ต้องเลือกทิศทางที่เหมาะกับบริบทสายวิชาการ/นักศึกษาจริงๆ ทำตามขั้นตอน brainstorm → critique → build ของ skill frontend-design
- Responsive ลงถึงมือถือ มี visible keyboard focus state
- ใช้ design token/CSS var เดิมใน `src/assets/main.css` ที่เข้ากันได้ ถ้าทิศทางใหม่ต้องการ palette ของตัวเอง ขยายได้ แต่บอกเหตุผลที่ต้อง diverge

## Output

- Component ใหม่ใน `src/components/student-profile/`
- View หรือ story สำหรับ wire ให้ดูได้ผ่าน `npm run dev`
- รัน `npm run type-check` ก่อนถือว่าเสร็จ
