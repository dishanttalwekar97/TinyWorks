import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import CareCloudXPage from './pages/CareCloudXPage';
import OpdManagementPage from './pages/OpdManagementPage';
import IpdManagementPage from './pages/IpdManagementPage';

import LaboratoryPage from './pages/LaboratoryPage';

function App() {
  const [currentPath, setCurrentPath] = useState(
    decodeURIComponent(window.location.pathname).toLowerCase()
  );
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(decodeURIComponent(window.location.pathname).toLowerCase());
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (path) => {
    if (path.startsWith('#')) {
      window.location.hash = path;
      setCurrentHash(path);
    } else {
      window.history.pushState({}, '', path);
      setCurrentPath(decodeURIComponent(path).toLowerCase());
    }
    window.scrollTo(0, 0);
  };

  const normalizedPath = decodeURIComponent(currentPath).toLowerCase();
  const normalizedHash = decodeURIComponent(currentHash).toLowerCase();

  const isLaboratoryRoute =
    normalizedPath.includes('laboratory') ||
    normalizedPath.includes('lis') ||
    normalizedHash.includes('laboratory') ||
    normalizedHash.includes('lis') ||
    normalizedPath === '/carecloudx/laboratory' ||
    normalizedPath === '/carecloudx/laboratory-management' ||
    normalizedPath === '/carecloudx/laboratory management' ||
    normalizedPath === '/modules/laboratory.html';

  if (isLaboratoryRoute) {
    return <LaboratoryPage onNavigate={navigate} />;
  }

  const isIpdRoute =
    normalizedPath.includes('ipd') ||
    normalizedHash.includes('ipd') ||
    normalizedPath === '/carecloudx/ipd' ||
    normalizedPath === '/carecloudx/ipd-management' ||
    normalizedPath === '/carecloudx/ipd management' ||
    normalizedPath === '/modules/ipd.html';

  if (isIpdRoute) {
    return <IpdManagementPage onNavigate={navigate} />;
  }

  const isOpdRoute =
    normalizedPath.includes('opd') ||
    normalizedHash.includes('opd') ||
    normalizedPath === '/carecloudx/opd' ||
    normalizedPath === '/carecloudx/opd-management' ||
    normalizedPath === '/carecloudx/opd management';

  if (isOpdRoute) {
    return <OpdManagementPage onNavigate={navigate} />;
  }

  const isCareCloudRoute =
    normalizedPath === '/carecloudx' ||
    normalizedPath.includes('/carecloudx') ||
    normalizedHash.includes('carecloudx');

  if (isCareCloudRoute) {
    return <CareCloudXPage onNavigate={navigate} />;
  }

  return <Home onNavigate={navigate} />;
}

export default App;
