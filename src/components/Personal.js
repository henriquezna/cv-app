import React from 'react';
import { useState } from "react";

function Personal({data, dataToParent}) {
    console.log(data, 'DATA21.');

    const [fName, setFName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        //var fName = document.getElementById("fname").value;
        console.log(fName, 'First.');
        dataToParent(fName);
    }

    return (
        <div>
            <h1>Personal</h1>
            <form onSubmit={handleSubmit}>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" value={fName} onChange={(e) => setFName(e.target.value)}/><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label for="phone">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" /><br />
                <button type = 'submit'>Submit</button>
            </form> 
            <button>Edit</button>
        </div>
    );
}

export default Personal;