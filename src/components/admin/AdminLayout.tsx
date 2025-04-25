import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "@/services/auth";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
