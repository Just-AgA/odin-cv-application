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
}

export { GeneralInformation };
