import Dashboard from "./pages/Dashboard";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Order from "./pages/Order";
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import './App.css'

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/search" element={<Search />} />
      <Route path="/order/:id" element={<Order />} />
    </Routes>
  );
}

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Header />
          <Root />
        </Router>
        <Outlet />
      </div>
    </div>
  )
}


export default App
