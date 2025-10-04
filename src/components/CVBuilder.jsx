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
}

export default CVBuilder;
