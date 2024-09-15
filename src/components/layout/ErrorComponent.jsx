import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div className="error-component">
      <div className="error-message">
        <h2>An error occurred</h2>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
