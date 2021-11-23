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
            <h3>Personal Preview</h3>
            <p>{personalData.name}</p>
            <p>{personalData.last}</p>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
        </div>
    );
}

export default PreviewPersonal;