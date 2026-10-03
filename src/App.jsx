import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import CareCloudXPage from './pages/CareCloudXPage';
import OpdManagementPage from './pages/OpdManagementPage';
import IpdManagementPage from './pages/IpdManagementPage';
import LaboratoryPage from './pages/LaboratoryPage';
import RadiologyManagementPage from './pages/RadiologyManagementPage';
import PharmacyManagementPage from './pages/PharmacyManagementPage';
import BillingManagementPage from './pages/BillingManagementPage';
import RegistrationManagementPage from './pages/RegistrationManagementPage';
import InventoryManagementPage from './pages/InventoryManagementPage';
import HrManagementPage from './pages/HrManagementPage';
import OtManagementPage from './pages/OtManagementPage';
import FinanceManagementPage from './pages/FinanceManagementPage';
import AnalyticsManagementPage from './pages/AnalyticsManagementPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CareCloudX Page Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-xl max-w-md w-full space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-pink-50 text-[#C82190] flex items-center justify-center font-bold text-xl">
              !
            </div>
            <h2 className="text-xl font-bold text-slate-900">Module Updating</h2>
            <p className="text-sm text-slate-500">The module content is refreshing. Click below to continue.</p>
            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 bg-gradient-to-r from-[#4F16A9] to-[#C82190] text-white rounded-full font-bold text-xs cursor-pointer shadow-md hover:opacity-95"
              >
                Reload Page
              </button>
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/');
                  window.dispatchEvent(new Event('popstate'));
                  window.location.reload();
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold text-xs cursor-pointer"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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

  const renderModule = (Component) => {
    if (!Component || (typeof Component !== 'function' && typeof Component !== 'object')) {
      return (
        <ErrorBoundary key="fallback">
          <CareCloudXPage onNavigate={navigate} />
        </ErrorBoundary>
      );
    }
    return (
      <ErrorBoundary key={normalizedPath}>
        <Component onNavigate={navigate} />
      </ErrorBoundary>
    );
  };

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
    return renderModule(LaboratoryPage);
  }

  const isRadiologyRoute =
    normalizedPath.includes('radiology') ||
    normalizedPath.includes('ris') ||
    normalizedHash.includes('radiology') ||
    normalizedHash.includes('ris') ||
    normalizedPath === '/carecloudx/radiology' ||
    normalizedPath === '/carecloudx/radiology-management' ||
    normalizedPath === '/carecloudx/radiology management' ||
    normalizedPath === '/modules/radiology.html';

  if (isRadiologyRoute) {
    return renderModule(RadiologyManagementPage);
  }

  const isPharmacyRoute =
    normalizedPath.includes('pharmacy') ||
    normalizedHash.includes('pharmacy') ||
    normalizedPath === '/carecloudx/pharmacy' ||
    normalizedPath === '/carecloudx/pharmacy-management' ||
    normalizedPath === '/carecloudx/pharmacy management' ||
    normalizedPath === '/modules/pharmacy.html';

  if (isPharmacyRoute) {
    return renderModule(PharmacyManagementPage);
  }

  const isBillingRoute =
    normalizedPath.includes('billing') ||
    normalizedHash.includes('billing') ||
    normalizedPath === '/carecloudx/billing' ||
    normalizedPath === '/carecloudx/billing-management' ||
    normalizedPath === '/carecloudx/billing management' ||
    normalizedPath === '/modules/billing.html';

  if (isBillingRoute) {
    return renderModule(BillingManagementPage);
  }

  const isRegistrationRoute =
    normalizedPath.includes('registration') ||
    normalizedHash.includes('registration') ||
    normalizedPath === '/carecloudx/registration' ||
    normalizedPath === '/carecloudx/registration-management' ||
    normalizedPath === '/carecloudx/registration management' ||
    normalizedPath === '/carecloudx/patient-registration' ||
    normalizedPath === '/carecloudx/patient registration' ||
    normalizedPath === '/modules/registration.html';

  if (isRegistrationRoute) {
    return renderModule(RegistrationManagementPage);
  }

  const isInventoryRoute =
    normalizedPath.includes('inventory') ||
    normalizedPath.includes('stores') ||
    normalizedHash.includes('inventory') ||
    normalizedHash.includes('stores') ||
    normalizedPath === '/carecloudx/inventory' ||
    normalizedPath === '/carecloudx/inventory-management' ||
    normalizedPath === '/carecloudx/inventory management' ||
    normalizedPath === '/carecloudx/stores' ||
    normalizedPath === '/modules/inventory.html';

  if (isInventoryRoute) {
    return renderModule(InventoryManagementPage);
  }

  const isHrRoute =
    normalizedPath === '/carecloudx/hr' ||
    normalizedPath === '/carecloudx/hr-management' ||
    normalizedPath === '/carecloudx/hr management' ||
    normalizedPath === '/carecloudx/payroll' ||
    normalizedPath === '/modules/hr.html' ||
    normalizedPath.includes('/hr') ||
    normalizedPath.includes('payroll') ||
    normalizedHash === '#hr' ||
    normalizedHash.includes('/hr') ||
    normalizedHash.includes('payroll');

  if (isHrRoute) {
    return renderModule(HrManagementPage);
  }

  const isOtRoute =
    normalizedPath.includes('operation-theatre') ||
    normalizedPath.includes('operation theatre') ||
    normalizedPath.includes('/ot') ||
    normalizedPath.includes('theatre') ||
    normalizedHash.includes('operation-theatre') ||
    normalizedHash.includes('operation theatre') ||
    normalizedHash.includes('/ot') ||
    normalizedHash === '#ot' ||
    normalizedPath === '/carecloudx/operation-theatre' ||
    normalizedPath === '/carecloudx/operation theatre' ||
    normalizedPath === '/carecloudx/ot' ||
    normalizedPath === '/carecloudx/ot-management' ||
    normalizedPath === '/carecloudx/ot management' ||
    normalizedPath === '/modules/operation-theatre.html';

  if (isOtRoute) {
    return renderModule(OtManagementPage);
  }

  const isFinanceRoute =
    normalizedPath.includes('finance') ||
    normalizedPath.includes('accounts') ||
    normalizedHash.includes('finance') ||
    normalizedHash.includes('accounts') ||
    normalizedPath === '/carecloudx/finance' ||
    normalizedPath === '/carecloudx/finance-management' ||
    normalizedPath === '/carecloudx/finance management' ||
    normalizedPath === '/carecloudx/accounts' ||
    normalizedPath === '/modules/finance.html';

  if (isFinanceRoute) {
    return renderModule(FinanceManagementPage);
  }

  const isAnalyticsRoute =
    normalizedPath.includes('analytics') ||
    normalizedPath.includes('reports') ||
    normalizedHash.includes('analytics') ||
    normalizedHash.includes('reports') ||
    normalizedPath === '/carecloudx/analytics' ||
    normalizedPath === '/carecloudx/analytics-management' ||
    normalizedPath === '/carecloudx/analytics management' ||
    normalizedPath === '/carecloudx/reports' ||
    normalizedPath === '/modules/analytics.html';

  if (isAnalyticsRoute) {
    return renderModule(AnalyticsManagementPage);
  }

  const isIpdRoute =
    normalizedPath.includes('ipd') ||
    normalizedHash.includes('ipd') ||
    normalizedPath === '/carecloudx/ipd' ||
    normalizedPath === '/carecloudx/ipd-management' ||
    normalizedPath === '/carecloudx/ipd management' ||
    normalizedPath === '/modules/ipd.html';

  if (isIpdRoute) {
    return renderModule(IpdManagementPage);
  }

  const isOpdRoute =
    normalizedPath.includes('opd') ||
    normalizedHash.includes('opd') ||
    normalizedPath === '/carecloudx/opd' ||
    normalizedPath === '/carecloudx/opd-management' ||
    normalizedPath === '/carecloudx/opd management';

  if (isOpdRoute) {
    return renderModule(OpdManagementPage);
  }

  const isCareCloudRoute =
    normalizedPath === '/carecloudx' ||
    normalizedPath.includes('/carecloudx') ||
    normalizedHash.includes('carecloudx');

  if (isCareCloudRoute) {
    return renderModule(CareCloudXPage);
  }

  return (
    <ErrorBoundary key="home">
      <Home onNavigate={navigate} />
    </ErrorBoundary>
  );
}

export default App;
