import React from 'react';

function PreviewExperience(props) {
    const experienceData = props.experienceData;

    return (
        <div>
            <h1>Experience Preview</h1>
            <h2>{experienceData.company}</h2>
            <h2>{experienceData.position}</h2>
            <h2>{experienceData.tasks}</h2>
            <h2>{experienceData.dateBeg}</h2>
            <h2>{experienceData.dateEnd}</h2>
        </div>
    );
}

export default PreviewExperience;