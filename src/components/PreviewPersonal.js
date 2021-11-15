import React, { useState, useEffect } from 'react';

function PreviewPersonal(props) {
    console.log(props, "PROPSNAME");

    //const [name, setName] = useState(props.personalInfo.name);
    //const name = props.personalData.name;
    const personalData = props.personalData;
   // console.log(name, "PROPSNAME");
    console.log(personalData, "personalDataPREVIEW");

    return (
        <div>
            <h1>Personal Preview</h1>
            <h2>{personalData.name}</h2>
            <h2>{personalData.last}</h2>
            <h2>{personalData.email}</h2>
            <h2>{personalData.phone}</h2>
        </div>
    );
}

export default PreviewPersonal;