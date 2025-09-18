import { Outlet, useLocation } from 'react-router';

const AdminLayout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <header>Admin header</header>
      {location.pathname}
      <p>🐶 Bienvenido, soy el admin layout</p>
      <main>
        <Outlet />
      </main>
      <footer>Admin footer</footer>
    </div>
  );
};

export default AdminLayout;
