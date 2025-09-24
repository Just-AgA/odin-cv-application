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
}

export { Education };
