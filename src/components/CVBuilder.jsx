import React, { useState } from 'react';
import { GeneralInformation } from './GeneralInformation';
import { Education } from './Education';
import { WorkExperience } from './WorkExperience';
import { CVPreview } from './CVPreview';

function CVBuilder() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditingGeneral, setIsEditingGeneral] = useState(true);

  // Education State
  const [educationList, setEducationList] = useState([]);

  // Work Experience State
  const [experienceList, setExperienceList] = useState([]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>CV Builder</h1>
      <hr />

      <GeneralInformation
        formData={generalInfo}
        setFormData={setGeneralInfo}
        isEditing={isEditingGeneral}
        setIsEditing={setIsEditingGeneral}
      />
    </div>
  );
}

export default CVBuilder;
