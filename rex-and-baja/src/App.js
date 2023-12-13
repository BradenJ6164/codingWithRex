import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ListComponent></ListComponent>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Test() {}


const ListComponent: React.FC = () => {
  const items: string[] = ['Item 1', 'Item 2', 'Item 3']; // Initial list items

  return (
    <div>
      <h1>List Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function MyButton() {
  return (
    <button>
      I'm a button
      </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


// export default App;
export {App,Test,ListComponent}
