import { useState } from 'react'
import './index.css'
import Header from './components/Header.jsx';

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <Login />
    <CreateAccount />

    {/* Reports (3 tables displaying all records in db) */}
    <CowReport />
    <CalfReport />
    <BullReport />

    {/* Components for "add new" */}
    <AddCow />
    <AddCalf />
    <AddBull />

    {/* Components for "update" (includes delete) */}
    <UpdateCow />
    <UpdateCalf />
    <UpdateBull />

    </>

  )
}

export default App
