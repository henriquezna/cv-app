import React, { useState, useEffect } from "react";
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

function CreateForms(props) {
    const [data, setData] = useState("JIMBO");

    const dataToParent = (name) => {
        console.log(name, "SEND FUNCTION");
        setData(name);
    }

    useEffect(() => { 
        console.log(data, 'mainApp USEEFFECT');  
    });

    return (
        <div>
            <h1>Create CV</h1>
            <Personal datas={data} dataToParent={dataToParent} />
            <Experience />
            <Education />
        </div>
    );
}

export default CreateForms;