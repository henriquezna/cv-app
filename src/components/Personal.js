import React from 'react';
import { useState } from "react";

function Personal({data, personalData, updatePersonalData}) {
    console.log(data, 'PersonalForm.');

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        console.log(fName, 'First.');
        updatePersonalData(fName, lName, email, phone);
    }

    return (
        <div>
            <h3>Personal</h3>
            <form onSubmit={handleSubmit}>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" value={fName} onChange={(e) => setFName(e.target.value)} /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" value={lName} onChange={(e) => setLName(e.target.value)} /><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label for="phone">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                <button type = 'submit'>Submit</button>
            </form> 
        </div>
    );
}

export default Personal;