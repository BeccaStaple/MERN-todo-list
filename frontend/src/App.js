import React from 'react';
import './App.css';
import AddItemSection from "./PageComponents/AddItemSection";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./PageComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddItemSection />
    </div>
  );
}

export default App;
