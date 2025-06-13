---
title: React
---

[React](https://react.dev/) is a popular open-source JavaScript library for building user interfaces, especially single-page applications (SPAs). Developed and maintained by Facebook, React enables developers to create reusable UI components and efficiently update the user interface in response to data changes.

---

## 🌟 Key Concepts

- **Component-Based:** Build UIs from small, reusable pieces called components.
- **JSX:** A syntax extension that lets you write HTML-like code in JavaScript.
- **Virtual DOM:** React uses a virtual representation of the DOM to optimize updates and rendering.
- **Props:** Inputs to components for passing data.
- **State:** Local data storage within components that can change over time.
- **Hooks:** Functions like `useState` and `useEffect` for managing state and side effects in functional components.

---

## 🛠️ Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

## 📚 Useful Links

- [React Official Docs](https://react.dev/)
- [React GitHub](https://github.com/facebook/react)
- [React Patterns](https://reactpatterns.com/)
- [Awesome React](https://github.com/enaqx/awesome-react)

---

## 📝 Notes

- React can be used with many frameworks and tools (Next.js, Gatsby, Vite, etc.).
- The React ecosystem includes state management libraries (Redux, Zustand), routing (React Router), and more.
- React Native enables building mobile apps using React.

---
