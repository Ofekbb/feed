import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { HomePage } from './pages/HomePage.jsx';

// Routes
import routes from './routes.js';

// Cmps
export function RootCmp() {
  
  return (
    <div className='root-cmp'>
      <main>
        <Routes>
            <Route key={routes.path} element={routes.component} path={routes.path} />
        </Routes>
      </main>
    </div >
  );

//es6
}

export default RootCmp;
