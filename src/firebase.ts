// src/firebase.ts
// Re-export Firebase functionality from server/firebase.ts
import firebaseApp, { db, storage } from '../server/firebase';
import * as admin from 'firebase-admin';

// Create mock auth service for development
const mockAuth = {
  verifyIdToken: async () => ({ uid: 'mock-uid', email: 'mock@example.com' }),
  createUser: async () => ({ uid: 'mock-uid' }),
  updateUser: async () => ({ uid: 'mock-uid' }),
  deleteUser: async () => ({}),
  getUser: async () => ({ uid: 'mock-uid', email: 'mock@example.com' }),
  getUserByEmail: async () => ({ uid: 'mock-uid', email: 'mock@example.com' }),
  listUsers: async () => ({ users: [] }),
};

export const auth = firebaseApp ? admin.auth(firebaseApp) : mockAuth;
export { db, storage };
export default firebaseApp;
