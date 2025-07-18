import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';

import CowReport from './components/CowReport.jsx';
import CalfReport from './components/CalfReport.jsx';
import BullReport from './components/BullReport.jsx';

import AddCow from './components/AddCow.jsx';
import AddCalf from './components/AddCalf.jsx';
import AddBull from './components/AddBull.jsx';

import UpdateCalf from './components/UpdateCalf.jsx';
import UpdateBull from './components/UpdateBull.jsx';
import UpdateCow from './components/UpdateCow.jsx';

import VetEvent from './components/VetEvent.jsx';
import ShotEvent from './components/ShotEvent.jsx';
import SaleEvent from './components/SaleEvent.jsx';
import DeathEvent from './components/DeathEvent.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home/Default route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        
        {/* Report routes */}
        <Route path="/reports" element={
          <div>
            <CowReport />
            <CalfReport />
            <BullReport />
          </div>
        } />
        <Route path="/CowReport" element={<CowReport />} />
        <Route path="/calf-report" element={<CalfReport />} />
        <Route path="/bull-report" element={<BullReport />} />
        
        {/* Add new routes */}
        <Route path="/add-cow" element={<AddCow />} />
        <Route path="/add-calf" element={<AddCalf />} />
        <Route path="/add-bull" element={<AddBull />} />
        
        {/* Update routes */}
        <Route path="/update-cow" element={<UpdateCow />} />
        <Route path="/update-calf" element={<UpdateCalf />} />
        <Route path="/update-bull" element={<UpdateBull />} />

        {/* other components (update data) */}
        <Route path="/vet-event" element={<VetEvent />} />
        <Route path="/shot-event" element={<ShotEvent />} />
        <Route path="/sale-event" element={<SaleEvent />} />
        <Route path="/death-event" element={<DeathEvent />} />

      </Routes>
    </>
  )
}

export default App
