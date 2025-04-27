import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Home() {
  const [showTasks, setShowTasks] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">AI Safety Incidents Project</h1>
            <p className="text-xl text-gray-600">Monitoring, Reporting, and Analyzing AI Safety Incidents</p>
          </header>
          <div className="p-8  -mt-14 text-center">
              <Link 
                to="/dashboard"
                className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Go to Dashboard
              </Link>
            </div>
          
          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Project description */}
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Description</h2>
              <p className="text-gray-600 leading-relaxed">
              This project is a frontend implementation of the AI Safety Incident Dashboard based on the provided task requirements. It demonstrates my skills in UI development, state management, user interaction handling, and responsive design. The dashboard allows users to view a list of mock AI safety incidents with functionalities to filter by severity, sort by reported date, expand/collapse detailed descriptions, and report new incidents through a validated form. I have focused on creating a clean, modern, and mobile-responsive interface using React (Vite) and Tailwind CSS, ensuring a smooth and user-friendly experience. This project simulates the logging and management of AI safety incidents through an interactive frontend system.
              </p>
            </div>
            
            {/* Creator info */}
            <div className="p-8 bg-gray-50 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 mb-1">Made by:</p>
                  <p className="text-lg font-medium text-gray-800">Priyanshu Ranjan</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Company:</p>
                  <p className="text-lg font-medium text-gray-800">Sparklehood</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">GitHub:</p>
                  <a 
                    href="https://github.com/priyanshuranjank/AI-Safety-Incident-Dashboard.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    AI-Safety-Incident-Dashboard
                  </a>
                </div>
              </div>
            </div>
            
           
            <div className="p-8 border-b border-gray-100">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-gray-800">Project Requirements</h2>
    <button 
      onClick={() => setShowTasks(!showTasks)}
      className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
    >
      {showTasks ? 'Hide' : 'Show'}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`transition-transform ${showTasks ? 'rotate-180' : ''}`}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  </div>

  {showTasks && (
    <ul className="space-y-3 pl-6 text-gray-600">
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Display a list of mock AI safety incidents showing Title, Severity, and Reported Date (in UTC).</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Implement filtering controls to filter incidents by Severity ("All", "Low", "Medium", "High").</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Add sorting controls to sort incidents by Reported Date (Newest First, Oldest First).</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Allow toggling visibility of each incident's full Description ("View Details" button).</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Include a form to report new incidents with Title, Description, and Severity inputs.</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Validate the form to ensure no empty fields before submission.</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>New incidents should immediately appear in the incident list after submission.</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Use responsive layout (Flexbox/Grid) for a clean look on all screen sizes.</span>
      </li>
      <li className="flex items-start">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3"></span>
        <span>Apply basic clean styling with hover effects for buttons and entries.</span>
      </li>
    </ul>
  )}
</div>

           
          </div>
          
          {/* Footer info */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>© 2025 AI Safety Initiative. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;