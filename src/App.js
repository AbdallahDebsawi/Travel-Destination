import './App.css';
import HomeComponent from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import TourDetailsComponent from './components/TourDetails/TourDetails';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/city/:id' element={<TourDetailsComponent />} />
    </Routes>

  );
}

export default App;
