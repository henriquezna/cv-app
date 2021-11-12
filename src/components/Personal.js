import React from 'react';

function Personal(props) {
    return (
        <div>
            <h1>Personal</h1>
            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label for="phone">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" />
            </form> 
            <button>Edit</button>
        </div>
    );
}

export default Personal;