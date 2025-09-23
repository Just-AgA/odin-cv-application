function GeneralInformation({
  formData,
  setFormData,
  isEditing,
  setIsEditing,
}) {
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }
}

export { GeneralInformation };
