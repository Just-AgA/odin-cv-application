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

  function handleCancel() {
    setIsEditing(false);
    setCurrentEditIndex(null);
    setForm({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  }

  return (
    <div>
      <h3>Work Experience</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          placeholder="Position"
          required
        />
        <input
          name="startDate"
          type="text"
          value={form.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          required
        />
        <input
          name="endDate"
          type="text"
          value={form.endDate}
          onChange={handleChange}
          placeholder="End Date"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows="3"
        />
        <button type="submit">
          {isEditing ? 'Update Experience' : 'Add Experience'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        {experienceList.map((item, index) => (
          <li key={index}>
            <p>
              <strong>{item.position}</strong> at{' '}
              <strong>{item.company}</strong>
            </p>
            <p>
              {item.startDate} – {item.endDate}
            </p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { WorkExperience };
