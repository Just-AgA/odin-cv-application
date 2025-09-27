import { useState } from 'react';

function Education({ educationList, setEducationList }) {
  const [form, setForm] = useState({
    school: '',
    degree: '',
    year: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      const updatedList = [...educationList];
      updatedList[currentEditIndex] = form;
      setEducationList(updatedList);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      setEducationList([...educationList, form]);
    }

    setForm({ school: '', degree: '', year: '' });
  }

  function handleEdit(index) {
    setForm(educationList[index]);
    setIsEditing(true);
    setCurrentEditIndex(index);
  }

  function handleDelete(index) {
    const newList = educationList.filter((_, i) => i !== index);
    setEducationList(newList);
    if (isEditing && index === currentEditIndex) {
      setIsEditing(false);
      setForm({ school: '', degree: '', year: '' });
    }
  }
}

export { Education };
