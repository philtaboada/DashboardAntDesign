import { Routes, Route } from "react-router-dom";
import Customer from "../../pages/Customer/Customer";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Inventory from "../../pages/Inventory/Inventory";
import Orders from "../../pages/Orders/Orders";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customer />} />
    </Routes>
  );
};

export default AppRoutes;
