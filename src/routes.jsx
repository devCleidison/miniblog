import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { CreatePost } from "./pages/CreatePost";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="sign-in"
        element={!user ? <SignIn /> : <Navigate to="/" />}
      />
      <Route
        path="dashboard"
        element={user ? <Dashboard /> : <Navigate to="/sign-in" />}
      />
      <Route
        path="posts/create"
        element={user ? <CreatePost /> : <Navigate to="/sign-in" />}
      />
    </Routes>
  );
};
