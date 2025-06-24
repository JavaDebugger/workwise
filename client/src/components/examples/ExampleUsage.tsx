import React from 'react';
import { SafeTimestampExample } from './SafeTimestampExample';
import { SafeStorageExample } from './SafeStorageExample';

/**
 * Demo page showing all the hydration prevention utilities
 * This can be imported and used in your app to test the utilities
 */
export function ExampleUsage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Client-Server Rendering Utilities Demo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This page demonstrates utilities that prevent hydration mismatches 
          and ensure consistent rendering between server and client environments.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <SafeTimestampExample />
        <SafeStorageExample />
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Implementation Notes</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• These utilities prevent React hydration mismatches</li>
          <li>• Safe for use in both SSR and client-only applications</li>
          <li>• Provide TypeScript support and error handling</li>
          <li>• Follow React best practices for client-server consistency</li>
        </ul>
      </div>
    </div>
  );
}

