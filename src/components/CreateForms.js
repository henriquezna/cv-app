import React, { useState, useEffect } from "react";
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import { StyledCreateForm } from "../components/styles/StyledCreateForm";

function CreateForms({ personalData, updatePersonalData, updateExperienceData, updateEducationData}) {

    useEffect(() => { 
        console.log(personalData, 'CreateForms USEEFFECT');  
    });

    return (
        <StyledCreateForm>
            <h2>Create CV</h2>
            <Personal personalData={personalData} updatePersonalData={updatePersonalData} />
            <Experience updateExperienceData={updateExperienceData} />
            <Education updateEducationData={updateEducationData} />
        </StyledCreateForm>
    );
}

export default CreateForms;