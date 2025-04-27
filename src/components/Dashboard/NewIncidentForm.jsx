import { useState } from 'react';

function NewIncidentForm({ addNewIncident, setShowForm }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Medium'
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      addNewIncident(formData);
      setFormData({
        title: '',
        description: '',
        severity: 'Medium'
      });
      setShowForm(false);
    }
  };
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Report New AI Safety Incident</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Incident Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full rounded-md border ${errors.title ? 'border-red-500' : 'border-gray-300'} 
              px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="Brief title describing the incident"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} 
              px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            placeholder="Detailed description of the incident, including potential impact and affected systems"
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>
        
        <div>
          <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-1">
            Severity Level
          </label>
          <div className="flex gap-4">
            {['Low', 'Medium', 'High'].map((level) => (
              <label key={level} className="inline-flex items-center">
                <input
                  type="radio"
                  name="severity"
                  value={level}
                  checked={formData.severity === level}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{level}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Submit Incident
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewIncidentForm;