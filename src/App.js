
import './App.css';
import Nvabar from './Components/Nvabar';
import React, { Component } from 'react'
import News from './Components/News';
// import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
      <Router>
        <Nvabar/>
        
        <Routes>
          <Route exact path="/" element={<News key="technology"  country="in" pageSize={this.pageSize} category="technology"/> } />
         
          <Route exact path="/Business" element={<News key="business"  country="in" pageSize={this.pageSize} category="business"/> } />
          <Route exact path="/General" element={<News key="general"  country="in" pageSize={this.pageSize} category="general"/> } />
          <Route exact path="/Entertainment" element={<News key="entertainment"  country="in" pageSize={this.pageSize} category="entertainment"/> } />
          <Route exact path="/Health" element={<News key="health"  country="in" pageSize={this.pageSize} category="health"/> } />
          <Route exact path="/Science" element={<News key="science"  country="in" pageSize={this.pageSize} category="science"/> } />
          <Route exact path="/Sports" element={<News key="sports"  country="in" pageSize={this.pageSize} category="sports"/> } />
          <Route exact path="/Technology" element={<News key="technology"  country="in" pageSize={this.pageSize} category="technology"/> } />
    
        </Routes>
      </Router>
      </div>
    )
  }
}

