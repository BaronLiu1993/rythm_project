import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Write from './assets/notifications.png'
import Placeholder from './assets/placeholder.png'

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, SecondPage, Profile, GenAI, Homepage } from './pages';

const App = () => {
  return (
    <>
    <div id = 'main-container' className="relative sm:-8 p-4 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element = {<Homepage />}/>
          <Route path="/GenAI" element = {<GenAI />}/>
          <Route path = "/second-page" element = {<SecondPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App