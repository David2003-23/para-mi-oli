import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './components/WelcomePage';
import { JourneyPage } from './components/JourneyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/journey" element={<JourneyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;