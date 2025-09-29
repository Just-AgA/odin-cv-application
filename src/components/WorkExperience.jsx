import { useState } from 'react';

function WorkExperience({ experienceList, setExperienceList }) {
  const [form, setForm] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
}

export { WorkExperience };
