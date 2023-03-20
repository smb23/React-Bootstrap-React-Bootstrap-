import logo from './sam23.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-white">Sam Borja / WD42P</p>
        <a
          className="App-link"
          href="https://smb23.github.io/sam23blog.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">Welcome To My Blog</Button>{' '}
        </a>
      </header>
    </div>
    
  );
}

export default App;
