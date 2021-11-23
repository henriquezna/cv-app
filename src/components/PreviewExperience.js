import React from 'react';

function PreviewExperience(props) {
    const experienceData = props.experienceData;

    return (
        <div>
            <h3>Experience Preview</h3>
            <p>{experienceData.company}</p>
            <p>{experienceData.position}</p>
            <p>{experienceData.tasks}</p>
            <p>{experienceData.dateBeg}</p>
            <p>{experienceData.dateEnd}</p>
        </div>
    );
}

export default PreviewExperience;