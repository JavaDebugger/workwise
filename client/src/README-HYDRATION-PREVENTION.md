# Client-Server Rendering Utilities

This package provides utilities to prevent client-server rendering mismatches in React applications, similar to Next.js hydration error solutions.

## Problem Statement

When using server-side rendering or when components need to work consistently between server and client environments, certain operations can cause mismatches:

- Time-dependent values (Date, timestamps)
- Browser-only APIs (localStorage, sessionStorage, window)
- Random values (Math.random)
- User-agent dependent rendering

## Solutions Provided

### 1. `useClientOnly` Hook

Ensures code only runs on the client side:

```tsx
import { useClientOnly } from './hooks/useClientOnly';

function MyComponent() {
  const isClient = useClientOnly();
  
  return (
    <div>
      {isClient ? (
        <span>Current time: {new Date().toLocaleString()}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
```

### 2. `ClientOnly` Component

Wraps components that should only render on the client:

```tsx
import { ClientOnly } from './components/ClientOnly';

function MyComponent() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      <TimeSensitiveComponent />
    </ClientOnly>
  );
}
```

### 3. `SafeRender` Utility

Renders different content for server vs client:

```tsx
import { SafeRender } from './utils/safeRender';

function MyComponent() {
  return (
    <SafeRender
      server={<span>Static content</span>}
      client={<span>Dynamic: {Math.random()}</span>}
    />
  );
}
```

### 4. Safe Storage Utilities

Access localStorage/sessionStorage safely:

```tsx
import { safeLocalStorage } from './utils/safeRender';

// Safe to call on server or client
const value = safeLocalStorage.getItem('key', 'default');
safeLocalStorage.setItem('key', 'value');
```

### 5. `useBrowserAPI` Hook

Safely access browser APIs:

```tsx
import { useBrowserAPI } from './hooks/useClientOnly';

function MyComponent() {
  const userAgent = useBrowserAPI(
    () => navigator.userAgent,
    'Unknown'
  );
  
  return <div>Browser: {userAgent}</div>;
}
```

## Common Use Cases

### Timestamps and Dates

```tsx
// ❌ Bad - will cause hydration mismatch
function BadTimestamp() {
  return <span>{new Date().toLocaleString()}</span>;
}

// ✅ Good - prevents mismatch
function GoodTimestamp() {
  const isClient = useClientOnly();
  return (
    <span>
      {isClient ? new Date().toLocaleString() : 'Loading time...'}
    </span>
  );
}
```

### Browser Storage

```tsx
// ❌ Bad - will error on server
function BadStorage() {
  const [value, setValue] = useState(localStorage.getItem('key'));
  // ...
}

// ✅ Good - safe on server and client
function GoodStorage() {
  const [value, setValue] = useState(
    () => safeLocalStorage.getItem('key', '')
  );
  // ...
}
```

### Conditional Rendering Based on Browser

```tsx
// ❌ Bad - typeof window check in render
function BadBrowserCheck() {
  return (
    <div>
      {typeof window !== 'undefined' && (
        <span>Client only content</span>
      )}
    </div>
  );
}

// ✅ Good - using ClientOnly
function GoodBrowserCheck() {
  return (
    <ClientOnly fallback={<span>Loading...</span>}>
      <span>Client only content</span>
    </ClientOnly>
  );
}
```

## Best Practices

1. **Use `ClientOnly` for entire components** that depend on browser APIs
2. **Use `useClientOnly`** when you need conditional logic within a component
3. **Use `SafeRender`** when you want to show different content server vs client
4. **Always provide meaningful fallbacks** during the loading state
5. **Use `suppressHydrationWarning`** sparingly and only when necessary
6. **Test your components** in both server and client environments

## Migration from Problematic Patterns

### Before (Problematic)
```tsx
function ProblematicComponent() {
  // Will cause hydration mismatch
  const timestamp = new Date().toISOString();
  
  // Will error on server
  const stored = localStorage.getItem('data');
  
  // Inconsistent between server/client
  const random = Math.random();
  
  return (
    <div>
      <p>Time: {timestamp}</p>
      <p>Stored: {stored}</p>
      <p>Random: {random}</p>
    </div>
  );
}
```

### After (Fixed)
```tsx
function FixedComponent() {
  const isClient = useClientOnly();
  
  return (
    <div>
      <ClientOnly fallback="Loading time...">
        <p>Time: {new Date().toISOString()}</p>
      </ClientOnly>
      
      <p>Stored: {safeLocalStorage.getItem('data', 'None')}</p>
      
      <SafeRender
        server={<p>Random: will load...</p>}
        client={<p>Random: {Math.random()}</p>}
      />
    </div>
  );
}
```

## TypeScript Support

All utilities are fully typed and provide excellent TypeScript support:

```tsx
// Type-safe browser API access
const windowWidth = useBrowserAPI(
  () => window.innerWidth,
  0 // fallback value
);

// Generic storage access
interface UserPrefs {
  theme: 'light' | 'dark';
}

const prefs: UserPrefs = JSON.parse(
  safeLocalStorage.getItem('prefs', JSON.stringify({ theme: 'light' }))
);
```

