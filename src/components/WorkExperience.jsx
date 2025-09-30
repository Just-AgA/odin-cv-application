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

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      const updatedList = [...experienceList];
      updatedList[currentEditIndex] = form;
      setExperienceList(updatedList);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      setExperienceList([...experienceList, form]);
    }

    setForm({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  }

  function handleEdit(index) {
    setForm(experienceList[index]);
    setIsEditing(true);
    setCurrentEditIndex(index);
  }

  function handleDelete(index) {
    const newList = experienceList.filter((_, i) => i !== index);
    setExperienceList(newList);
    if (isEditing && index === currentEditIndex) {
      setIsEditing(false);
      setForm({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    }
  }
}

export { WorkExperience };
