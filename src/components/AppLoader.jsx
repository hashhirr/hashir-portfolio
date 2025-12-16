import React from 'react';

const AppLoader = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-8"></div>
        <h2 className="text-2xl font-bold text-white mb-4">Loading Hashir Qureshi's Portfolio</h2>
        <p className="text-secondary">Preparing an amazing experience...</p>
      </div>
    </div>
  );
};

export default AppLoader;
