import { Routes, Route } from 'react-router';

import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';

const App = () => {
  return (
    <Routes>
      <Route
        // path='/'
        index
        element={<HomePage />}
      />
      <Route
        path='about'
        element={<AboutPage />}
      />
    </Routes>
  );
};

export default App;
