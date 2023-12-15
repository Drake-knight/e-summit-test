// OfflinePage.tsx
import React, { useState, useEffect } from 'react';

const OfflinePage= () => {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div>
        <div>
          <p>Sorry, you are offline.</p>
          <button onClick={handleReloadClick}>Reload</button>
        </div>
    </div>
  );
};

export default OfflinePage;
