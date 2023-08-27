import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Articles from './Pages/Articles';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/articles" element={<Home/>} />
        <Route path="/articles/:id" element={<Articles/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
