import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Local network (Wi-Fi) par access allow karne ke liye
    port: 5173, // Fix port setup takii connection unstable na ho
  }
})