import { Route, Routes } from 'react-router-dom';
import { NavBar } from './layout/NavBar';
import { HookPoolPage } from './several/HookPoolPage';

export const HooksApp = () => {
  return (
    <div className="container">
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HookPoolPage />} />
        <Route path="/several" element={<HookPoolPage />} />
      </Routes>
    </div>
  );
};
