import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import UserDetailModal from "./UserDetailModal.jsx";
import useUserStore from "../../store/userStore.js";
import { getUser, updateKYCStatus } from "../../api/admin.api.js";
import { getAllUsers } from "../../api/admin.api.js";


export default function UserManagement({ users, setUsers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [userStatus, setUserStatus] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  // NEW STATES FOR SERVER PAGINATION
  const [totalPages, setTotalPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);

  const { userDetails, setUserDetails } = useUserStore();
  
  const handleCloseModal = () => {
    setSelectedUser(null);
    setUpdateMessage("");
    setIsUpdating(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const token = useUserStore.getState().token;
      if (!token) return;

      try {
        setLoading(true);

        const res = await getAllUsers(token, {
          page: currentPage,
          search: searchQuery,
          status: statusFilter,
        });

        // Adjust based on backend structure
        setUsers(res?.data?.users || []);
        setTotalPages(Math.ceil((res?.data?.total || 0) / 50));
        setTotalUsers(res?.data?.total || 0);
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, searchQuery, statusFilter, setUsers]);

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    setUserStatus(user.status);

    const token = useUserStore.getState().token;
    if (!token) return;

    try {
      const resUserDetails = await getUser(token, user.id);
      if (resUserDetails) {
        setUserDetails(resUserDetails);
      }

      setSelectedUser(() => ({ ...resUserDetails }));
      setUserStatus(resUserDetails?.kyc?.status);
    } catch (err) {
      console.error("Failed to fetch user details:", err);
    }
  };

  const handleStatusChange = async () => {
    if (!selectedUser) return;

    const token = useUserStore.getState().token;
    if (!token) return;

    try {
      setIsUpdating(true);
      setUpdateMessage("");

      const response = await updateKYCStatus(
        token,
        selectedUser.id,
        userStatus,
      );

      const updatedStatus = response?.new_status;

      if (!updatedStatus) {
        throw new Error("Invalid response from server");
      }

      const updatedUser = {
        ...selectedUser,
        kyc: {
          ...selectedUser.kyc,
          status: updatedStatus,
        },
        status: updatedStatus,
      };

      setSelectedUser(updatedUser);

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === updatedUser.id ? { ...u, status: updatedStatus } : u,
        ),
      );

      setUpdateMessage(response.message);
    } catch (error) {
      console.error("Failed to update KYC:", error);
      setUpdateMessage("Failed to update KYC status");
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "pending":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "rejected":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };



  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          User{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Management
          </span>
        </h1>
        <p className="text-gray-400">Manage all users and verifications</p>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, username, or email..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // reset page
              }}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex gap-2">
          {["all", "approved", "pending", "rejected"].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1); // reset page
              }}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                statusFilter === status
                  ? status === "approved"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : status === "pending"
                      ? "bg-yellow-500/20 border border-yellow-500/50 text-yellow-400"
                      : status === "rejected"
                        ? "bg-red-500/20 border border-red-500/50 text-red-400"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10">
          <div className="text-2xl font-bold text-white">{totalUsers}</div>
          <div className="text-sm text-gray-400">Total Users</div>
        </div>

        {["approved", "pending", "rejected"].map((status) => (
          <div
            key={status}
            className={`p-4 rounded-xl bg-gradient-to-br ${
              status === "approved"
                ? "from-green-500/10 to-green-500/5 border-green-500/20"
                : status === "pending"
                  ? "from-yellow-500/10 to-yellow-500/5 border-yellow-500/20"
                  : "from-red-500/10 to-red-500/5 border-red-500/20"
            } border`}
          >
            <div
              className={`text-2xl font-bold ${
                status === "approved"
                  ? "text-green-400"
                  : status === "pending"
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {users.filter((u) => u.status === status).length}
            </div>
            <div className="text-sm text-gray-400 capitalize">{status}</div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Name
                </th>
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Username
                </th>
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Email
                </th>
                <th className="text-left p-4 text-sm font-semibold text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-400">
                    Loading users...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-400">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => handleUserClick(user)}
                    className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <td className="p-4 text-white font-medium">
                      {user.full_name}
                    </td>
                    <td className="p-4 text-gray-400">{user.username}</td>
                    <td className="p-4 text-gray-400">{user.email}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(user.status)}`}
                      >
                        {user?.status?.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <UserDetailModal
        selectedUser={selectedUser}
        onClose={handleCloseModal}
        userStatus={userStatus}
        setUserStatus={setUserStatus}
        handleStatusChange={handleStatusChange}
        isUpdating={isUpdating}
        updateMessage={updateMessage}
      />
    </div>
  );
}
