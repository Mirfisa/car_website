import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Home from './components/Home';
import CarList from './components/CarList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-light-bg">
          <TopBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<CarList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;