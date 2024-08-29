import React from 'react'
const SuccessPage = ({ formData }) => {
  return (
    <div>
      <h2>Success!</h2>
      <p>Thank you for submitting your information. Here’s what you submitted:</p>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Phone: {formData.phone}</li>
        <li>Loan Type: {formData.loanType}</li>
      </ul>
    </div>
  );
};

export default sucess
