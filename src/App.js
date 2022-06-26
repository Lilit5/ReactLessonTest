import './App.css';
import React from 'react'
import NavBar from './NavBar';
import Phones from './Phones';
import PhoneProvider from './PhoneProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestComponent from './TestComponent';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';


function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <PhoneProvider>

          <Routes>
            <Route path='/use-callback' element={<UseCallback />} />
            <Route path='/' element={<UseMemo />} />
            <Route path='/use-ref' element={<TestComponent />} />
            <Route path='/nav' element={<NavBar />} />
            <Route path='/phone' element={<Phones />} />
          </Routes>
        </PhoneProvider>

      </BrowserRouter>

      {/* <NavBar />
        <Phones /> */}
    </div>
  );
}

export default App;
