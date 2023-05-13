import React from 'react';
import { Link } from 'react-router-dom';
import './CreateResume.css'

import './App.css'

function App() {
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
      <main>
        <section>
          <h1>Resume Builder</h1>
          <p>Create a professional resume in minutes</p>
          <Link to="/PersonalInfoForm">
  <button>Create New Resume</button>
</Link>
        </section>
        <section>
          <h2>Featured Templates</h2>
          <ul>
            <li>
              
                <img src="./temp1.png" alt="Template 1" />
                <h3>Template 1</h3>
             
            </li>
            <li>
              
                <img src="./temp4.jpg" alt="Template 2" />
                <h3>Template 2</h3>
              
            </li>
            <li>
              
                <img src=".temp4.jpg" alt="Template 3" />
                <h3>Template 3</h3>
             
            </li>
          </ul>
        </section>
      </main>

      

      <footer>
        <p>Resume Builder</p>
      </footer>
    </div>
  );
}

export default App;
