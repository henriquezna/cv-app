import React, { useState, useEffect } from "react";
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

function CreateForms({ personalData, updatePersonalData, updateExperienceData, updateEducationData}) {
    // const [data, setData] = useState("JIMBO");

    // const dataToParent = (name) => {
    //     console.log(name, "SEND FUNCTION");
    //     setData(name);
    // }

    useEffect(() => { 
        console.log(personalData, 'CreateForms USEEFFECT');  
    });

    return (
        <div>
            <h1>Create CV</h1>
            <Personal personalData={personalData} updatePersonalData={updatePersonalData} />
            <Experience updateExperienceData={updateExperienceData} />
            <Education updateEducationData={updateEducationData} />
        </div>
    );
}

export default CreateForms;