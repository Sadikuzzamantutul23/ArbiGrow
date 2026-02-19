import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/admin/AdminLayout.jsx";
import UserManagement from "../component/admin/UserManagement.jsx";
import DashboardOverview from "../component/admin/DashboardOverview.jsx";

// Mock data for users
const generateMockUsers = () => {
  const statuses = ["approved", "pending", "rejected"];
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Singapore",
  ];
  const docTypes = ["passport", "nid"];

  return Array.from({ length: 127 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    username: `user${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    fullName: `John Doe ${i + 1}`,
    mainWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    depositWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    withdrawWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    referralWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    generationWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    arbxWallet: `0x${Math.random().toString(16).substr(2, 40)}`,
    country: countries[Math.floor(Math.random() * countries.length)],
    phone: `+1 (555) ${String(Math.floor(Math.random() * 900 + 100))}-${String(Math.floor(Math.random() * 9000 + 1000))}`,
    documentType: docTypes[Math.floor(Math.random() * docTypes.length)],
    documentImages:
      docTypes[Math.floor(Math.random() * docTypes.length)] === "passport"
        ? ["https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400"]
        : [
            "https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400",
            "https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400",
          ],
    referrers: [
      {
        level: 1,
        name: "Referrer Level 1",
        username: "ref1",
        email: "ref1@example.com",
      },
      {
        level: 2,
        name: "Referrer Level 2",
        username: "ref2",
        email: "ref2@example.com",
      },
      {
        level: 3,
        name: "Referrer Level 3",
        username: "ref3",
        email: "ref3@example.com",
      },
      {
        level: 4,
        name: "Referrer Level 4",
        username: "ref4",
        email: "ref4@example.com",
      },
      {
        level: 5,
        name: "Referrer Level 5",
        username: "ref5",
        email: "ref5@example.com",
      },
    ],
  }));
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(generateMockUsers());
  const [activePage, setActivePage] = useState("dashboard");

  const renderPageContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardOverview users={users} />;
      case "users":
        return <UserManagement users={users} setUsers={setUsers} />;
      case "reports":
      case "settings":
        return (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-gray-400">This page is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <AdminLayout
      activePage={activePage}
      setActivePage={setActivePage}
      navigate={navigate}
    >
      {renderPageContent()}
    </AdminLayout>
  );
}
