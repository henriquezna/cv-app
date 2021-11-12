import React from 'react';

function Experience(props) {
    return (
        <div>
            <h1>Experience</h1>
            <form>
                <label for="company">Company name:</label><br />
                <input type="text" id="company" name="company" /><br />
                <label for="position">Position Title:</label><br />
                <input type="text" id="position" name="position" /><br />
                <label for="tasks">Main Tasks:</label><br />
                <input type="text" id="tasks" name="tasks" /><br />
                <label for="dateFrom">Date Began:</label><br />
                <input type="date" id="dateFrom" name="dateFrom" /><br />
                <label for="dateEnd">Dates:</label><br />
                <input type="date" id="dateEnd" name="dateEnd" /><br />
            </form>
            <button>Edit</button>
        </div>
    );
}

export default Experience;