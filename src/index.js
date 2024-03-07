// 1) Import React (to define components) and ReactDOM (to show components in browser) libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Take control of <div> with ID named root
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3) Create a component
function App() {
  return <h1>Hi there!</h1>
}

// 4) Show components on the screen
root.render(
  <App />
);
