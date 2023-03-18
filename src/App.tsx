import React from 'react';
import logo from './logo.svg';
import './App.css';
import Molstar from "molstar-react";

// function App() {
//   return (
//     <div>
//     {/* <Molstar pdbId="1LOL"/> */}
//     </div>
//   );
//     /* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//   */
// }

export const App = () => {
  return (
    <Molstar useInterface ="true" showControls="true" showAxes="true"/>
  );
}

export default App;
