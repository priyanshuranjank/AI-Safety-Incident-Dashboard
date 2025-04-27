import IncidentItem from './IncidentItem';

function IncidentList({ incidents }) {
  return (
    <div className="mt-6 space-y-4">
      {incidents.length > 0 ? (
        incidents.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      ) : (
        <div className="text-center py-8 text-gray-500">
          No incidents found matching the current filters.
        </div>
      )}
    </div>
  );
}

export default IncidentList;