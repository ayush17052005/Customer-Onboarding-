import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import LoanOptions from './LoanOptions';
import RequiredDocuments from './RequiredDocuments';
import Success from './Success';

const Multipage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    documents: [],
  });

  // Handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Go to the next step
  const nextStep = () => setStep(step + 1);

  // Go to the previous step
  const prevStep = () => setStep(step - 1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  switch (step) {
    case 1:
      return <PersonalDetails nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <LoanOptions nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <RequiredDocuments nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4:
      return <Success formData={formData} />;
    default:
      return null;
  }
};

export default Multipage;
