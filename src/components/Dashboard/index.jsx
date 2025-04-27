import { useState, useEffect } from 'react';
import IncidentList from './IncidentList';
import FilterControls from './FilterControls';
import SortControls from './SortControls';
import NewIncidentForm from './NewIncidentForm';

function Dashboard({ incidents, addNewIncident }) {
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    let result = [...incidents];
    
    // Apply filtering
    if (filter !== 'All') {
      result = result.filter(incident => incident.severity === filter);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredIncidents(result);
  }, [incidents, filter, sortOrder]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">AI Safety Incidents</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <FilterControls filter={filter} setFilter={setFilter} />
            <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <button 
              onClick={() => setShowForm(!showForm)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              {showForm ? 'Hide Form' : 'Report New Incident'}
            </button>
          </div>
        </div>
        
        {showForm && (
          <div className="mb-8">
            <NewIncidentForm addNewIncident={addNewIncident} setShowForm={setShowForm} />
          </div>
        )}
        
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredIncidents.length} incident{filteredIncidents.length !== 1 ? 's' : ''}
            {filter !== 'All' ? ` with ${filter} severity` : ''}
            {`, sorted by ${sortOrder === 'newest' ? 'newest first' : 'oldest first'}`}
          </p>
        </div>
        
        <IncidentList incidents={filteredIncidents} />
      </div>
    </div>
  );
}

export default Dashboard;