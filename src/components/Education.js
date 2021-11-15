import React from 'react';
import { useState } from "react";

function Education({ updateEducationData }) {
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [date, setDate] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        updateEducationData(school, major, date);
      }

    return (
        <div>
            <h1>Education Section</h1>
            <form onSubmit={handleSubmit}>
                <label for="school">School:</label><br />
                <input type="text" id="school" name="school" value={school} onChange={(e) => setSchool(e.target.value)} /><br />
                <label for="major">Major:</label><br />
                <input type="text" id="major" name="major" value={major} onChange={(e) => setMajor(e.target.value)} /><br />
                <label for="dates">Date of Study:</label><br />
                <input type="date" id="dates" name="dates" value={date} onChange={(e) => setDate(e.target.value)} /><br />
                <button type = 'submit'>Submit</button>
            </form>
            <button>Edit</button>
        </div>
    );
}

export default Education;