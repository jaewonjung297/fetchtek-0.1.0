import React, { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Perform email submission logic here
    console.log('Submitted email:', email);
  };

  return (
    <div>
      <label htmlFor="emailInput">Email:</label>
      <input
        type="email"
        id="emailInput"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EmailInput;
