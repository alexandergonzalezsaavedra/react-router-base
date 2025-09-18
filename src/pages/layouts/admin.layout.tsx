import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div>
      <header>Admin header</header>
      <p>🐶 Bienvenido, soy el admin layout</p>
      <main>
        <Outlet />
      </main>
      <footer>Admin footer</footer>
    </div>
  );
};

export default AdminLayout;
