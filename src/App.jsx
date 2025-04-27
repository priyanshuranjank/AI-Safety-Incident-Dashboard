import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Footer from './components/Footer';
import { mockIncidents } from './data/mockIncidents';
import './index.css';

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  
  const addNewIncident = (newIncident) => {
    const incidentWithId = {
      ...newIncident,
      id: incidents.length > 0 ? Math.max(...incidents.map(inc => inc.id)) + 1 : 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([incidentWithId, ...incidents]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/dashboard" 
            element={
              <>
                <Nav />
                <main className="flex-grow container mx-auto px-4 py-8">
                  <Dashboard incidents={incidents} addNewIncident={addNewIncident} />
                </main>
                <Footer />
              </>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;