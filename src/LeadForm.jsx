import React, { useState } from "react";

function LeadForm() {
  const [formData, setFormData] = useState({
    propertyAddress: "",
    ownerName: "",
    phoneNumber: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lead submitted: " + JSON.stringify(formData, null, 2));
    // Here you could send the data to a backend or Google Sheet
    setFormData({ propertyAddress: "", ownerName: "", phoneNumber: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <input
        name="propertyAddress"
        placeholder="Property Address"
        value={formData.propertyAddress}
        onChange={handleChange}
        required
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <input
        name="ownerName"
        placeholder="Owner Name"
        value={formData.ownerName}
        onChange={handleChange}
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        rows="4"
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <button type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;
