import React from 'react';

function Education(props) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    return (
        <div>
            <h1>Education Section</h1>
            <form onSubmit={handleSubmit}>
                <label for="school">School:</label><br />
                <input type="text" id="school" name="school" /><br />
                <label for="major">Major:</label><br />
                <input type="text" id="major" name="major" /><br />
                <label for="dates">Date of Study:</label><br />
                <input type="date" id="dates" name="dates" /><br />
                <button type = 'submit'>Submit</button>
            </form>
            <button>Edit</button>
        </div>
    );
}

export default Education;