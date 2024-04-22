import React from 'react';
import { Routes, Route } from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import { SetProvider } from './context/SetProvider';

import FlashcardsController from './components/flashcards/FlashcardsController';
import DashboardController from './components/dashboard/DashboardController';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Layout from './context/Layout';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />} >
        <Route path = "/" element = {<Login />} />
        <Route path = "register" element = {<Register />} />

        {/* protect these on top of JWT authentication */}
        <Route element = {<RequireAuth />}>
            <Route path = "dashboard" element = {<SetProvider><DashboardController /></SetProvider>} />
            <Route path = "study" element = {<SetProvider><FlashcardsController /></SetProvider>} />
        </Route>

        <Route path = "*" element = {<></>} />
      </Route>
    </Routes>
  );
}

export default App;
