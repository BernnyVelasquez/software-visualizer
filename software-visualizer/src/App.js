import './App.css';
import React from 'react';
import './nav'
import Header from './nav';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'; 

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SortingVisualizer></SortingVisualizer>
      
      
    </div>
  );
}

export default App;
