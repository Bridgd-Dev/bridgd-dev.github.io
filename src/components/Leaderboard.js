import React, { useState } from 'react';
import './Leaderboard.css';
import students from './topTenData'; // Import the student data

const Leaderboard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track which item is expanded

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
  };

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="leaderboard-inner">
        <ol>
          {/* Header Row */}
          <li className="header">
            <span className="rank">Rank</span>
            <span className="name">Name</span>
            <span className="focus">Focus Area</span>
            <span className="project">Project Name</span>
            <span className="points">Points</span>
          </li>

          {/* Student Rows */}
          {students.map((student, index) => (
            <div key={student.rank}>
              <li onClick={() => toggleDescription(index)} className="student-row">
                <span className="rank">{student.rank}</span>
                <span className="name">{student.name}</span>
                <span className="focus">{student.focus}</span>
                <span className="project">{student.project}</span>
                <span className="points">{student.points} pts</span>
                <span className={`dropdown-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                  &#9660; {/* Downward arrow */}
                </span>
              </li>

              {/* Conditionally render the description */}
              {expandedIndex === index && (
                <div className="description">
                  <h3>Description</h3>
                  <p>{student.description}</p>
                  <h3>Corporate Endorsement</h3>
                  <p>{student.endorsement}</p>
                  <button className="learn-more" onClick={() => toggleDescription(index)}>Learn More</button>
                </div>
              )}
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;