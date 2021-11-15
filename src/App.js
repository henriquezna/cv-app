import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import CreateForms from './components/CreateForms';
import Preview from './components/Preview';

function App() {

  const [personalData, setPersonalData] = useState(
    {
      name: "JIMBO",
      last: "Jones",
      email: "abcd",
      phone: "1234567890"
    });

  const [experienceData, setExperienceData] = useState(
    {
      company: "ACME",
      position: "CEO",
      tasks: "abcd",
      dateBeg: "12/20/2015",
      dateEnd: "08/15/2021"
    });

  const [educationData, setEducationData] = useState(
    {
      school: "Michigan",
      major: "Michigan Studies",
      date: "08/20/2015",
    });
  
  const updatePersonalData = (fName, lName, email, phone) => {
    console.log(fName, lName, "SEND FUNCTION2");

    setPersonalData({
      name: fName,
      last: lName,
      email: email,
      phone: phone
    });

    console.log(personalData, "SEND FUNCTION2");
  }

  const updateExperienceData = (company, position, tasks, dateBeg, dateEnd) => {

    setExperienceData({
      company: company,
      position: position,
      tasks: tasks,
      dateBeg: dateBeg,
      dateEnd: dateEnd
    });

    console.log(experienceData, "SEND FUNCTION2");
  }

  const updateEducationData = (school, major, date) => {

    setEducationData({
      school: school,
      major: major,
      date: date,
    });

    console.log(educationData, "SEND FUNCTION2");
  }

  useEffect(() => { 
       console.log(personalData, 'mainApp USEEFFECT');  
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Maker</h1>
      </header>
      <body>
        <h1>Hello World!</h1>
        <CreateForms updatePersonalData={updatePersonalData} updateExperienceData={updateExperienceData} updateEducationData={updateEducationData} />
        <Preview personalData={personalData} experienceData={experienceData} educationData={educationData} />
      </body>
    </div>
  );
}

export default App;