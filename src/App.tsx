import { Routes, Route } from 'react-router';

// public
import PublicLayout from './pages/layouts/public.layout';
import HomePage from './pages/public/home.page';
import AboutPage from './pages/public/about.page';

// auth
import AuthLayout from './pages/layouts/auth.layout';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import RootLayout from './pages/layouts/root.layout';

// admin
import ProfilePage from './pages/admin/profile.page';
import DashboardPage from './pages/admin/dashboard.page';
import AdminLayout from './pages/layouts/admin.layout';

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<PublicLayout />}>
          <Route
            // path='/'
            index
            element={<HomePage />}
          />
          <Route
            path='about'
            element={<AboutPage />}
          />
        </Route>

        <Route
          path='auth'
          element={<AuthLayout />}
        >
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            index
            element={<div>Auth index page</div>}
          />
          <Route
            path='register'
            element={<RegisterPage />}
          />
        </Route>

        <Route
          path='admin'
          element={<AdminLayout />}
        >
          <Route
            index
            element={<div>👍🏽 Admin index page</div>}
          />
          <Route
            path='dashboard'
            element={<DashboardPage />}
          />
          <Route
            path='profile'
            element={<ProfilePage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
