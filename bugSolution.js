```javascript
// components/MyComponent.js

import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // The issue was related to the order of operations.  The component was rendering first, and useEffect was called after, triggering the cleanup function immediately after.
    // No change needed in useEffect, but ensure that the component is properly rendering with the initial state.
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```