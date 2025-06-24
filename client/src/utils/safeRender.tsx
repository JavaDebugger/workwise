import React, { ReactNode } from 'react';

/**
 * Utility for safely rendering content that might differ between server and client
 * Handles cases where Date, Math.random, or other non-deterministic values are used
 */
export interface SafeRenderProps {
  server: ReactNode;
  client: ReactNode;
  suppressHydrationWarning?: boolean;
}

export function SafeRender({ 
  server, 
  client, 
  suppressHydrationWarning = true 
}: SafeRenderProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div suppressHydrationWarning={suppressHydrationWarning}>
      {isClient ? client : server}
    </div>
  );
}

/**
 * Utility for safely accessing browser-only APIs
 * Returns fallback during SSR and actual value on client
 */
export function safeBrowserAccess<T>(
  accessor: () => T,
  fallback: T
): T {
  if (typeof window === 'undefined') {
    return fallback;
  }
  
  try {
    return accessor();
  } catch {
    return fallback;
  }
}

/**
 * Utility for safe localStorage access
 */
export const safeLocalStorage = {
  getItem: (key: string, fallback: string | null = null): string | null => {
    return safeBrowserAccess(() => localStorage.getItem(key), fallback);
  },
  
  setItem: (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.warn('Failed to set localStorage item:', error);
      }
    }
  },
  
  removeItem: (key: string): void => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.warn('Failed to remove localStorage item:', error);
      }
    }
  }
};

/**
 * Utility for safe sessionStorage access
 */
export const safeSessionStorage = {
  getItem: (key: string, fallback: string | null = null): string | null => {
    return safeBrowserAccess(() => sessionStorage.getItem(key), fallback);
  },
  
  setItem: (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(key, value);
      } catch (error) {
        console.warn('Failed to set sessionStorage item:', error);
      }
    }
  },
  
  removeItem: (key: string): void => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        console.warn('Failed to remove sessionStorage item:', error);
      }
    }
  }
};

