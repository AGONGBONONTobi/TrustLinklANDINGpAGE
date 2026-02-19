/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_ADMIN_KEY: string
  readonly VITE_GEMINI_API_KEY: string
  // Ajoute d'autres variables ici si nécessaire
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
