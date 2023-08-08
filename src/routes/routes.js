import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;