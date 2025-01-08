import React from "react";
import { Route, Routes } from "react-router-dom";
import TeamSection from '../src/components/home/TeamSection'
import ChatClient from "./pages/ChatClient";
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/teams" element={<TeamSection />} />
      </Routes>



      <Routes>
        <Route
          path="/dashboard"
          element={
            <div className="flex flex-col"> {/* Ensure ChatClient is above */}
              <ChatClient />
              <Dashboard />
            </div>
          }
        />

        <Route path="/" element={<Home />}/>
      </Routes> {/* Dashboard component below the chat */}

    </div>
  );
};

export default App;
