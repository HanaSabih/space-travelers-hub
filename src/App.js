import React from 'react';

import { Routes, Route } from 'react-router-dom';
import NavbarPg from './components/NavbarPg';
import NoPage from './components/NoPage';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<NavbarPg />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
