import logo from './logo.svg';
import './App.css';

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
      
    <button id="hello">Hello</button>
  <button id="error">Error</button>
  <div id="output"></div>
  <script src="https://browser.sentry-cdn.com/4.0.5/bundle.min.js" crossorigin="anonymous"></script>
  <script>
    (function () {
      'use strict';
      Sentry.init({ dsn: 'https://b5bf359072254626aba8e64368e77b7d@sentry.io/1289664' });
      var helloEl = document.getElementById('hello');
      var errorEl = document.getElementById('error');
      var outputEl = document.getElementById('output');
      helloEl.addEventListener('click', handleHelloClick);
      errorEl.addEventListener('click', handleErrorClick);
      function handleHelloClick() {
        outputEl.innerHTML = 'Hello World';
        try {
          throw new Error('Caught');
        } catch (err) {
          Sentry.captureException(err);
        }
      }
      function handleErrorClick() {
        throw new Error('Uncaught');
      }
    })();
  </script>
    </div>
  );
}

export default App;
