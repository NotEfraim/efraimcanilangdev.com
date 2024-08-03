import logo from './logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <article>
          <h1>We&rsquo;ll be back soon!</h1>
        <div>
          <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:efraimcanilangdev.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
          <p>&mdash; The Team</p>
        </div>
        </article>
      </header>
    </div>
  );
}

export default App;
