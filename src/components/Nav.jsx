import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-indigo-200"
          >
            <path d="M12 2H2v10h10V2z"></path>
            <path d="M22 12h-10v10h10V12z"></path>
            <path d="M12 12H2v10h10V12z"></path>
            <path d="M22 2h-10v10h10V2z"></path>
          </svg>
          <Link to="/" className="text-xl font-bold hover:text-indigo-200 transition-colors">
            AI Safety Incident Dashboard
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-indigo-200 transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-indigo-200 transition-colors">
            Dashboard
          </Link>
          {/* <button className="hover:text-indigo-200 transition-colors">Reports</button> */}
          <button className="hover:text-indigo-200 transition-colors">Settings</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;