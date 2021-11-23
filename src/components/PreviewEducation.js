import React from 'react';

function PreviewEducation(props) {
    const educationData = props.educationData;
    
    return (
        <div>
            <h3>Education Preview</h3>
            <p>{educationData.school}</p>
            <p>{educationData.major}</p>
            <p>{educationData.date}</p>
        </div>
    );
}

export default PreviewEducation;