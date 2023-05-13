import React, { useState } from 'react';

function SkillsForm(props) {
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [skill4, setSkill4] = useState('');
  const [skill5, setSkill5] = useState('');
  const [skill6, setSkill6] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input
    if (!skill1 || !skill2 || !skill3 || !skill4 || !skill5 || !skill6) {
      setError('Please enter all skills');
      return;
    }

    // Save skills to state
    props.onSkillsSubmit({ skill1, skill2, skill3, skill4, skill5, skill6 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Skills</h2>
      {error && <p className="error">{error}</p>}
      <label htmlFor="skill1">Skill 1:</label>
      <input type="text" id="skill1" value={skill1} onChange={(e) => setSkill1(e.target.value)} />
      <label htmlFor="skill2">Skill 2:</label>
      <input type="text" id="skill2" value={skill2} onChange={(e) => setSkill2(e.target.value)} />
      <label htmlFor="skill3">Skill 3:</label>
      <input type="text" id="skill3" value={skill3} onChange={(e) => setSkill3(e.target.value)} />
      <label htmlFor="skill4">Skill 4:</label>
      <input type="text" id="skill4" value={skill4} onChange={(e) => setSkill4(e.target.value)} />
      <label htmlFor="skill5">Skill 5:</label>
      <input type="text" id="skill5" value={skill5} onChange={(e) => setSkill5(e.target.value)} />
      <label htmlFor="skill6">Skill 6:</label>
      <input type="text" id="skill6" value={skill6} onChange={(e) => setSkill6(e.target.value)} />
      <button type="submit">Next</button>
    </form>
  );
}

export default SkillsForm;
