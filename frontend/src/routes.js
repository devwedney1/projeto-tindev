import React from 'react';
import { BrowserRouter, Route, Routes as Routers  } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" exact element={< Login />} />
        <Route path="/dev/:id" element={< Main />} />
      </Routers>
    </BrowserRouter>
  );
}