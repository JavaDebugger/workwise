import React, { useState } from 'react';
import { ClientOnly } from '../ClientOnly';
import { safeLocalStorage } from '../../utils/safeRender';
import { useClientOnly } from '../../hooks/useClientOnly';

/**
 * Example component demonstrating safe localStorage usage
 * Prevents hydration mismatches when accessing browser storage APIs
 */
export function SafeStorageExample() {
  const [value, setValue] = useState('');
  const isClient = useClientOnly();
  
  const handleSave = () => {
    safeLocalStorage.setItem('example-key', value);
  };
  
  const handleLoad = () => {
    const stored = safeLocalStorage.getItem('example-key', '');
    setValue(stored || '');
  };
  
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Safe Storage Example</h3>
      
      <div className="space-y-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter some text"
          className="w-full p-2 border rounded"
        />
        
        <div className="space-x-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={!isClient}
          >
            Save to LocalStorage
          </button>
          
          <button
            onClick={handleLoad}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={!isClient}
          >
            Load from LocalStorage
          </button>
        </div>
        
        <ClientOnly fallback={<p className="text-gray-500">Storage operations will be available on client...</p>}>
          <p className="text-sm text-gray-600">
            Current stored value: {safeLocalStorage.getItem('example-key', 'None')}
          </p>
        </ClientOnly>
      </div>
    </div>
  );
}

