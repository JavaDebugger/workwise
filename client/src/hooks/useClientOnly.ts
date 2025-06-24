import { useState, useEffect } from 'react';

/**
 * Hook to ensure components only render on the client side
 * Prevents server-client mismatch issues similar to Next.js hydration errors
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Hook to safely access browser APIs without causing rendering mismatches
 */
export function useBrowserAPI<T>(getAPI: () => T, fallback: T): T {
  const [value, setValue] = useState<T>(fallback);
  const isClient = useClientOnly();

  useEffect(() => {
    if (isClient) {
      setValue(getAPI());
    }
  }, [isClient, getAPI]);

  return isClient ? value : fallback;
}

