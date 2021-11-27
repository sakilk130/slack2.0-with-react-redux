import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
