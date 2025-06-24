import { useMemo } from 'react';

/**
 * Hook to detect if the current React version supports suppressHydrationWarning
 * This can be useful for conditional logic in components
 */
export function useSupportsHydrationWarning(): boolean {
  return useMemo(() => {
    // Check if React version supports suppressHydrationWarning
    // This feature was added in React 16
    try {
      const reactVersion = require('react/package.json').version;
      const majorVersion = parseInt(reactVersion.split('.')[0], 10);
      return majorVersion >= 16;
    } catch {
      // If we can't determine version, assume it's supported
      // since most modern React apps use React 16+
      return true;
    }
  }, []);
}

/**
 * Utility to conditionally apply suppressHydrationWarning
 * based on React version support
 */
export function getHydrationWarningProps(suppress: boolean = true) {
  const supportsWarning = useSupportsHydrationWarning();
  
  return supportsWarning && suppress
    ? { suppressHydrationWarning: true }
    : {};
}

