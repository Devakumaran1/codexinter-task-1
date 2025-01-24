import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleSummarizer from "./ArticleSummarizer";
import './index.css'

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<ArticleSummarizer />} />
        </Routes>
    
    </Router>
  );
};

export default App;

