import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>LAB10 PART C </h1>
    
        <div> This is a react app I deployed using a service called Netlify.  </div> <br />
        <div> The process was straightforward and I did not run into any issues. I followed the following steps: </div> <br />
        <div> 1. Downloaded Node, Node.JS, React, and Netlify. </div> <br />
        <div> 2. Edited provided files (namely App.js) to adhere to lab requirements. </div> <br />
        <div> 3. Created a GitHub repo and added the needed files. </div> <br />
        <div> 4. I then opened my terminal, and executed: netlify deploy. </div> <br />

      </header>
    </div>
  );
}

export default App;
