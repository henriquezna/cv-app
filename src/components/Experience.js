import React from 'react';
import { useState } from "react";

function Experience({ updateExperienceData }) {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [tasks, setTasks] = useState('');
    const [dateFrom, setdateFrom] = useState('');
    const [dateEnd, setdateEnd] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        updateExperienceData(company, position, tasks, dateFrom, dateEnd);
      }

    return (
        <div>
            <h3>Experience</h3>
            <form onSubmit={handleSubmit}>
                <label for="company">Company name:</label><br />
                <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} /><br />
                <label for="position">Position Title:</label><br />
                <input type="text" id="position" name="position" value={position} onChange={(e) => setPosition(e.target.value)} /><br />
                <label for="tasks">Main Tasks:</label><br />
                <input type="text" id="tasks" name="tasks" value={tasks} onChange={(e) => setTasks(e.target.value)} /><br />
                <label for="dateFrom">Date Began:</label><br />
                <input type="date" id="dateFrom" name="dateFrom" value={dateFrom} onChange={(e) => setdateFrom(e.target.value)} /><br />
                <label for="dateEnd">Dates:</label><br />
                <input type="date" id="dateEnd" name="dateEnd" value={dateEnd} onChange={(e) => setdateEnd(e.target.value)} /><br /><br />
                <button type = 'submit'>Submit</button>
            </form>
        </div>
    );
}

export default Experience;