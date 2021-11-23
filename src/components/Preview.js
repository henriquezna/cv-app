import React from 'react';
import PreviewPersonal from './PreviewPersonal.js';
import PreviewExperience from './PreviewExperience.js';
import PreviewEducation from './PreviewEducation.js';
import { StyledPreview } from "../components/styles/StyledPreview";

function Preview(props) {
    console.log(props, "PREVIEW");
    return (
        <StyledPreview>
            <h2>Preview</h2>
            <PreviewPersonal personalData={props.personalData} />
            <PreviewExperience experienceData={props.experienceData} />
            <PreviewEducation educationData={props.educationData} />
        </StyledPreview>
    );
}

export default Preview;