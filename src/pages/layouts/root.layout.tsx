import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className='container'>
      <Outlet />
      <p>Soy el root layout</p>
    </div>
  );
};

export default RootLayout;
