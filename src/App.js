import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './template/Header';
import Footer from './template/Footer';
import Home from './template/Home';
import Menu from './template/Menu';
import About from './template/About';
import BookTable from './template/BookTable';



const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App