import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;