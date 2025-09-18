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

        <Route element={<AuthLayout />}>
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='register'
            element={<RegisterPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
