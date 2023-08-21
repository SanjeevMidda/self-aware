// import './index.css';
// import one from "./imgs/one.png";
// import two from "./imgs/two.png";
// import three from "./imgs/three.png";
// import four from "./imgs/four.png";

import { useState } from "react";

function App() {

  const [size, setSize] = useState(true);

  return (
    <div className="App">
     <nav>
      <h3>SELF AWARE</h3>
      <h3>O</h3>
     </nav>

     <div className={size? "centerContainer" : "centerContainer resized"}onClick={() => {setSize(!size)}}></div>

     <h1>Self Aware is a design and technology studio that brings brands to life on the web. Based in Philly, we create beautiful, performant websites for a wide range of individuals and organizations near and far.</h1>

     <h2>😆</h2>
    </div>
  );
}

export default App;
