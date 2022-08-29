import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

import './App.css';

import { parse } from 'yaml';
import { useState, useEffect } from 'react';
import dbFile from "./data/db.yml";


function App() {
  const [db, setDb] = useState({});

  useEffect(() => {
    fetch(dbFile)
    .then((r) => r.text())
    .then(text  => {
      setDb(parse(text));
    })  
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home db={db} setDb={setDb} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
