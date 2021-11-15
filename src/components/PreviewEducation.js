import React from 'react';

function PreviewEducation(props) {
    const educationData = props.educationData;
    
    return (
        <div>
            <h1>Education Preview</h1>
            <h2>{educationData.school}</h2>
            <h2>{educationData.major}</h2>
            <h2>{educationData.date}</h2>
        </div>
    );
}

export default PreviewEducation;