//import { useState } from 'react'
import { Dashboard } from "./pages/Dashboard";
import { Movie } from "./pages/Movie";
import { Search } from "./pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';


import './App.css'

function Root() {
  return (
    <Routes>
      <Route path="/" element={Dashboard()} />
      <Route path="/movie/:id" element={Movie()} />
      <Route path="/search" element={Search()} />
    </Routes>
  );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div className="App">
        <div className="App-header">
          <Header/>
          <Router>
            <Root />
          </Router>
        </div>
      </div>
  )
}


export default App
