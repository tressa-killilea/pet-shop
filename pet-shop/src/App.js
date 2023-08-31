import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/header';
import Volunteer from './pages/volunteer/volunteer';
import Dogs from './pages/dogs/dogs';
import Cats from './pages/cats/cats';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="dogs" element={<Dogs />} />
          <Route path="cats" element={<Cats />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
