import { useState } from 'react';

function GeneralInformation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted', formData);
  }

  return (
    <>
      <h3>Enter personal information here:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export { GeneralInformation };
