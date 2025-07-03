import React from 'react';
import LeadForm from './LeadForm';

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "2rem" }}>
      <h1>EOC Lead Tracker</h1>
      <p>Welcome to your custom lead tracking app!</p>
      <LeadForm />
    </div>
  );
}

export default App;
