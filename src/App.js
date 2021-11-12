import logo from './logo.svg';
import './App.css';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <body>
        <h1>Hello World!</h1>
        <Personal />
        <Experience />
        <Education />
        <button>Submit</button>
        <Preview />
      </body>
    </div>
  );
}

export default App;
