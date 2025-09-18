import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <header>Auth header</header>
      <main>
        <Outlet />
      </main>
      <footer>Auth footer</footer>
    </div>
  );
};

export default AuthLayout;
