import React from "react"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/create-resume">Create Resume</Link></li>
            <li><Link to="/view-resumes">View Resumes</Link></li>
          </ul>
        </nav>
      </header>



      <h1>This is job posting Form</h1>
    </div>
  );
}
export default Home