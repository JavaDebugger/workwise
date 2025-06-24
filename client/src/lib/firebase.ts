import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  ActionCodeSettings
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Firebase AI is not yet available in the current Firebase SDK version
// import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

console.log('Starting Firebase initialization...');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDygjMpaMXBEBcRnVVtOxW41nD7DA-cXJY",
  authDomain: "workwise-sa-project.firebaseapp.com",
  projectId: "workwise-sa-project",
  storageBucket: "workwise-sa-project.firebasestorage.app",
  messagingSenderId: "716919248302",
  appId: "1:716919248302:web:582684fa2eb06133aca43f",
};

console.log('Firebase config:', { ...firebaseConfig, apiKey: '[REDACTED]' });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

console.log('Firebase initialized successfully');

// Connect to emulators in development mode
if (import.meta.env.DEV) {
  const useEmulators = import.meta.env.VITE_USE_FIREBASE_EMULATORS !== 'false';
  console.log('Development mode detected, useEmulators:', useEmulators);

  if (useEmulators) {
    console.log('Connecting to Firebase emulators...');

    // Import emulator connection functions
    import('firebase/auth').then(({ connectAuthEmulator }) => {
      console.log('Connecting to Auth emulator on http://127.0.0.1:9099');
      connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    });

    import('firebase/firestore').then(({ connectFirestoreEmulator }) => {
      console.log('Connecting to Firestore emulator on 127.0.0.1:8080');
      connectFirestoreEmulator(getFirestore(app), '127.0.0.1', 8080);
    });

    import('firebase/storage').then(({ connectStorageEmulator }) => {
      console.log('Connecting to Storage emulator on 127.0.0.1:9199');
      connectStorageEmulator(getStorage(app), '127.0.0.1', 9199);
    });
  }
}

// Email link authentication settings
const actionCodeSettings: ActionCodeSettings = {
  // URL to redirect to after email link is clicked
  url: `${window.location.origin}/auth/email-signin-complete`,
  // Handle the link in the app instead of browser
  handleCodeInApp: true,
  // Only include iOS and Android settings if they are defined
  ...(import.meta.env.VITE_IOS_BUNDLE_ID ? {
    iOS: {
      bundleId: import.meta.env.VITE_IOS_BUNDLE_ID
    }
  } : {}),
  ...(import.meta.env.VITE_ANDROID_PACKAGE_NAME ? {
    android: {
      packageName: import.meta.env.VITE_ANDROID_PACKAGE_NAME,
      installApp: true,
      minimumVersion: '12'
    }
  } : {}),
  ...(import.meta.env.VITE_FIREBASE_DYNAMIC_LINK_DOMAIN ? {
    dynamicLinkDomain: import.meta.env.VITE_FIREBASE_DYNAMIC_LINK_DOMAIN
  } : {})
};

// Log the current configuration for debugging
console.log('Email link authentication URL:', `${window.location.origin}/auth/email-signin-complete`);
console.log('Current origin:', window.location.origin);

// Sign up with email and password
export const signUpWithEmail = async (email: string, password: string, displayName: string) => {
  try {
    console.log(`Attempting to sign up user with email: ${email}`);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created successfully:', userCredential.user.uid);
    
    // Update user profile with display name
    if (userCredential.user) {
      console.log('Updating user profile with display name:', displayName);
      await updateProfile(userCredential.user, {
        displayName
      });
      console.log('User profile updated successfully');
    }
    return userCredential.user;
  } catch (error: any) {
    console.error("Error signing up:", error.code, error.message);
    throw error;
  }
};

// Sign in with email and password
export const signInWithEmail = async (email: string, password: string) => {
  try {
    console.log(`Attempting to sign in user with email: ${email}`);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in successfully:', userCredential.user.uid);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error signing in:", error.code, error.message);
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Listen to auth state changes
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Send email link for passwordless sign-in
export const sendSignInLink = async (email: string) => {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    // Save email locally to verify it when user clicks the link from email
    window.localStorage.setItem('emailForSignIn', email);
    return true;
  } catch (error) {
    console.error("Error sending sign-in link:", error);
    throw error;
  }
};

// Complete sign-in with email link
export const completeSignInWithEmailLink = async (email: string, link: string) => {
  try {
    const result = await signInWithEmailLink(auth, email, link);
    // Clear the stored email
    window.localStorage.removeItem('emailForSignIn');
    return result.user;
  } catch (error) {
    console.error("Error completing sign-in with email link:", error);
    throw error;
  }
};

// Check if the URL is a sign-in with email link
export const checkIfSignInWithEmailLink = (link: string): boolean => {
  return isSignInWithEmailLink(auth, link);
};

// Get email from storage (for use with email link auth)
export const getEmailFromStorage = (): string | null => {
  return window.localStorage.getItem('emailForSignIn');
};

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Helper function for file uploads
export const uploadFile = async (file: File, path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

// AI Helper Functions

// TODO: Implement generateContent when Firebase AI is available
export const generateContent = async (prompt: string): Promise<string> => {
  // Temporary placeholder implementation
  console.warn('Firebase AI not yet available. This is a placeholder response.');
  return `AI Response to: "${prompt}"\n\nThis is a placeholder response. Firebase AI integration will be available when the firebase/ai package is released.`;
};

export { auth, db, storage };
// TODO: Export ai and model when Firebase AI is available
// export { auth, db, storage, ai, model };
