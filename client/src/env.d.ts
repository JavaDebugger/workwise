/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_FIREBASE_PROJECT_ID: string
  readonly VITE_FIREBASE_STORAGE_BUCKET: string
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string
  readonly VITE_FIREBASE_APP_ID: string
  readonly VITE_USE_FIREBASE_EMULATORS: string
  readonly VITE_IOS_BUNDLE_ID?: string
  readonly VITE_ANDROID_PACKAGE_NAME?: string
  readonly VITE_FIREBASE_DYNAMIC_LINK_DOMAIN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
