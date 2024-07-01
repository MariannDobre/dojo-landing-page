import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const isAgeVerified = sessionStorage.getItem('ageIsVerified');

  return isAgeVerified === 'true' ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
