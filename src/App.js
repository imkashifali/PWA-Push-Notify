import React from 'react';
import './App.css';
import {initNotification} from './services/firebaseService'

function App() {
  return (
    <div className="App">
      <h1>Notify</h1>
      <button onClick={initNotification}>Configration Notification</button>
    </div>
  );
}

export default App;
