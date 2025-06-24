import React, { ReactNode } from 'react';
import { useClientOnly } from '../hooks/useClientOnly';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
  suppressHydrationWarning?: boolean;
}

/**
 * Component that only renders its children on the client side
 * Prevents server-client rendering mismatches
 * 
 * Similar to Next.js dynamic imports with ssr: false
 */
export function ClientOnly({ 
  children, 
  fallback = null, 
  suppressHydrationWarning = false 
}: ClientOnlyProps) {
  const isClient = useClientOnly();

  if (!isClient) {
    return <>{fallback}</>;
  }

  return (
    <div suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </div>
  );
}

/**
 * HOC version of ClientOnly for wrapping components
 */
export function withClientOnly<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function ClientOnlyComponent(props: P) {
    return (
      <ClientOnly fallback={fallback}>
        <Component {...props} />
      </ClientOnly>
    );
  };
}

