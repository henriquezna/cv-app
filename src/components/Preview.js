import React from 'react';
import PreviewPersonal from './PreviewPersonal.js';
import PreviewExperience from './PreviewExperience.js';
import PreviewEducation from './PreviewEducation.js';



function Preview(props) {
    console.log(props, "PREVIEW");
    return (
        <div>
            <h1>Preview</h1>
            <PreviewPersonal personalInfo={props}/>
            <PreviewExperience />
            <PreviewEducation />
        </div>
    );
}

export default Preview;