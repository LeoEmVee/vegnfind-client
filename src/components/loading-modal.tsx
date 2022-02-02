import React from 'react';

interface IProps {
  isAuthorized: boolean;
}

function LoadingModal() {
  return (
    <div
      style={{
        position: 'absolute',
        width: 500,
        height: 300,
        display: 'flex',
        backgroundColor: 'red',
        color: 'white',
        fontSize: 30,
      }}>
      <p>logging in...</p>
    </div>
  );
}

export default LoadingModal;
