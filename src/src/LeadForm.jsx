import React, { useState } from 'react';

function LeadForm() {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    ownerName: '',
    phoneNumber: '',
    leadSource: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', marginTop: '1rem' }}>
      <input type="text" name="propertyAddress" placeholder="Property Address" onChange={handleChange} required />
      <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
      <input type="text" name="leadSource" placeholder="Lead Source" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LeadForm;
