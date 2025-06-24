import React from 'react';
import { ClientOnly } from '../ClientOnly';
import { SafeRender } from '../../utils/safeRender';
import { useClientOnly } from '../../hooks/useClientOnly';

/**
 * Example component demonstrating safe timestamp rendering
 * Prevents hydration mismatches when using Date() or time-dependent values
 */
export function SafeTimestampExample() {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Safe Timestamp Examples</h3>
      
      {/* Method 1: Using ClientOnly component */}
      <div>
        <p className="text-sm text-gray-600">Method 1: ClientOnly wrapper</p>
        <ClientOnly fallback={<span>Loading timestamp...</span>}>
          <span>Current time: {new Date().toLocaleString()}</span>
        </ClientOnly>
      </div>
      
      {/* Method 2: Using SafeRender utility */}
      <div>
        <p className="text-sm text-gray-600">Method 2: SafeRender utility</p>
        <SafeRender
          server={<span>Timestamp will load...</span>}
          client={<span>Current time: {new Date().toLocaleString()}</span>}
        />
      </div>
      
      {/* Method 3: Using useClientOnly hook */}
      <TimestampWithHook />
    </div>
  );
}

function TimestampWithHook() {
  const isClient = useClientOnly();
  
  return (
    <div>
      <p className="text-sm text-gray-600">Method 3: useClientOnly hook</p>
      <span>
        {isClient 
          ? `Current time: ${new Date().toLocaleString()}`
          : 'Timestamp loading...'
        }
      </span>
    </div>
  );
}

