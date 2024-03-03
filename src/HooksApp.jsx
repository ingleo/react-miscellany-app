import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './layout/NavBar';
import { HookPoolPage, ToDoPage, ContextOnePage, ContextTwoPage } from './pages';
import { UserProvider } from './context/UserProvider';

export const HooksApp = () => {
  return (
    <div className="container">
      <UserProvider>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<HookPoolPage />} />
          <Route path="/several" element={<HookPoolPage />} />
          <Route path="/reducer" element={<ToDoPage />} />
          <Route path='/context-one' element={<ContextOnePage/>} />
          <Route path='/context-two' element={<ContextTwoPage/>} />
          <Route path="/*" element={<Navigate to="/several" />} />
        </Routes>
      </UserProvider>
    </div>
  );
};
