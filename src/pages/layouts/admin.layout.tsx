import { Outlet, useLocation } from 'react-router';
import AdminNavbar from '../../components/admin-navbar';

const AdminLayout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <header>
        <AdminNavbar />
      </header>
      <br />
      <pre>{JSON.stringify(location)}</pre>
      {location.pathname}
      <br />
      <br />
      <p>🐶 Bienvenido, soy el admin layout</p>
      <main>
        <Outlet />
      </main>
      <footer>Admin footer</footer>
    </div>
  );
};

export default AdminLayout;
