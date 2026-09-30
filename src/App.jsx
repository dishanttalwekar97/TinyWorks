import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import CareCloudXPage from './pages/CareCloudXPage';

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname.toLowerCase()
  );
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
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
      setCurrentPath(path.toLowerCase());
    }
    window.scrollTo(0, 0);
  };

  const isCareCloudRoute =
    currentPath === '/carecloudx' ||
    currentPath.includes('/carecloudx') ||
    currentHash === '#carecloudx-page';

  if (isCareCloudRoute) {
    return <CareCloudXPage onNavigate={navigate} />;
  }

  return <Home onNavigate={navigate} />;
}

export default App;
