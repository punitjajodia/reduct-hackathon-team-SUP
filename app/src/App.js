import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CampaignList from "./Campaigns";
import CreateCampaign from "./CreateCampaign";
import InstructionPage from "./InstructionsPage";
import Challenges from "./ChallengePage";


import { parse } from "yaml";
import { useState, useEffect } from "react";
import dbFile from "./data/db.yml";

function App() {
  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState({});

  useEffect(() => {
    fetch(dbFile)
      .then((r) => r.text())
      .then((text) => {
        setDb(parse(text));
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home db={db} setDb={setDb} />} />
          <Route
            path="/campaigns"
            element={<CampaignList db={db} setDb={setDb} loading={loading} />}
          />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/instructions" element={<InstructionPage />} />
          <Route path="/challenge" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
