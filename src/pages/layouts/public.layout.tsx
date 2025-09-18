import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <div>
      <header>Public header</header>
      <main>
        <Outlet />
      </main>
      <footer>Public footer</footer>
    </div>
  );
};

export default PublicLayout;
