import React from 'react';

function PreviewPersonal(props) {
    console.log(props, "PROPSNAME");
    const name = props.personalInfo.name;
    console.log(name, "PROPSNAME");

    return (
        <div>
            <h1>Personal Preview</h1>
            <h2>{name}</h2>
        </div>
    );
}

export default PreviewPersonal;