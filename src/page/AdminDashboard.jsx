import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Mail,
  User,
  Phone,
  MapPin,
  Wallet,
  FileText,
  Users,
  CheckCircle,
  XCircle,
  Home,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Menu
} from 'lucide-react';
import logo from '../assets/Arbigrow-Logo.png';
import { useNavigate } from 'react-router-dom';

// Mock data for users
const generateMockUsers = () => {
  const statuses = ['approved', 'pending', 'rejected'];
  const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore'];
  const docTypes = ['passport', 'nid'];
  
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
    documentImages: docTypes[Math.floor(Math.random() * docTypes.length)] === 'passport' 
      ? ['https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400']
      : ['https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400', 'https://images.unsplash.com/photo-1606711795156-92b94d2b6e8e?w=400'],
    referrers: [
      { level: 1, name: 'Referrer Level 1', username: 'ref1', email: 'ref1@example.com' },
      { level: 2, name: 'Referrer Level 2', username: 'ref2', email: 'ref2@example.com' },
      { level: 3, name: 'Referrer Level 3', username: 'ref3', email: 'ref3@example.com' },
      { level: 4, name: 'Referrer Level 4', username: 'ref4', email: 'ref4@example.com' },
      { level: 5, name: 'Referrer Level 5', username: 'ref5', email: 'ref5@example.com' },
    ]
  }));
};



export default function AdminDashboard() {
    const navigate = useNavigate();
    const AdminPage = 'dashboard';
const [users, setUsers] = useState(generateMockUsers());
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userStatus, setUserStatus] = useState('');
  const [activePage, setActivePage] = useState(AdminPage);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  

  const usersPerPage = 50;

  const adminPages = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, description: 'Overview & Analytics' },
    { id: 'users', label: 'User Management', icon: Users, description: 'Manage all users' },
    { id: 'reports', label: 'Reports', icon: TrendingUp, description: 'Coming Soon', disabled: true },
    { id: 'settings', label: 'Settings', icon: Settings, description: 'Coming Soon', disabled: true },
  ];

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setUserStatus(user.status);
  };

const handleStatusChange = () => {
  if (selectedUser) {
    const updatedUser = { ...selectedUser, status: userStatus };

    // update selectedUser modal
    setSelectedUser(updatedUser);

    // update main users array so table reflects change
    setUsers(prevUsers =>
      prevUsers.map(u => (u.id === updatedUser.id ? updatedUser : u))
    );
  }
};
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'rejected': return 'text-red-400 bg-red-500/10 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Admin <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Overview</span>
              </h1>
              <p className="text-gray-400">Welcome to the admin dashboard</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Users', value: '1,234', change: '+12%' },
                { label: 'Active Users', value: '856', change: '+8%' },
                { label: 'Pending Verifications', value: '42', change: '-5%' },
                { label: 'Total Revenue', value: '$125K', change: '+18%' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10"
                >
                  <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change} from last month
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                User <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Management</span>
              </h1>
              <p className="text-gray-400">Manage all users and verifications</p>
            </div>

            {/* Filters and Search */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, username, or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    statusFilter === 'all'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setStatusFilter('approved')}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    statusFilter === 'approved'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Approved
                </button>
                <button
                  onClick={() => setStatusFilter('pending')}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    statusFilter === 'pending'
                      ? 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setStatusFilter('rejected')}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    statusFilter === 'rejected'
                      ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Rejected
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10">
                <div className="text-2xl font-bold text-white">{users.length}</div>
                <div className="text-sm text-gray-400">Total Users</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                <div className="text-2xl font-bold text-green-400">
                  {users.filter(u => u.status === 'approved').length}
                </div>
                <div className="text-sm text-gray-400">Approved</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400">
                  {users.filter(u => u.status === 'pending').length}
                </div>
                <div className="text-sm text-gray-400">Pending</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20">
                <div className="text-2xl font-bold text-red-400">
                  {users.filter(u => u.status === 'rejected').length}
                </div>
                <div className="text-sm text-gray-400">Rejected</div>
              </div>
            </div>

            {/* Users Table */}
            <div className="rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-sm font-semibold text-gray-400">Name</th>
                      <th className="text-left p-4 text-sm font-semibold text-gray-400">Username</th>
                      <th className="text-left p-4 text-sm font-semibold text-gray-400">Email</th>
                      <th className="text-left p-4 text-sm font-semibold text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user) => (
                      <tr
                        key={user.id}
                        onClick={() => handleUserClick(user)}
                        className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <td className="p-4 text-white font-medium">{user.name}</td>
                        <td className="p-4 text-gray-400">{user.username}</td>
                        <td className="p-4 text-gray-400">{user.email}</td>
                        <td className="p-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(user.status)}`}>
                            {user.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} users
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="px-4 py-2 text-sm text-gray-400">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
      case 'settings':
        return (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 flex items-center justify-center">
                <FileText className="w-10 h-10 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-gray-400">This page is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0d1137] to-[#0a0e27] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="lg:hidden fixed top-6 left-6 z-[60] p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-cyan-500/30 transition-all"
      >
        {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          x: mobileSidebarOpen || window.innerWidth >= 1024 ? 0 : -300,
          width: sidebarCollapsed ? 80 : 280 
        }}
        className={`fixed top-0 left-0 bottom-0 z-50 bg-gradient-to-b from-[#0a0e27] via-[#0d1137] to-[#0a0e27] border-r border-white/10 backdrop-blur-xl ${
          mobileSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}>
               <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/50">
                                <img
                               src={logo}
                               alt="ArbiGrow Logo"
                               className="w-full h-full object-cover"
                              />
                        </div>
              {!sidebarCollapsed && (
                <div>
                  <div className="font-bold text-white">ArbiGrow</div>
                  <div className="text-[10px] text-cyan-400/80 uppercase tracking-wider">Admin Panel</div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {adminPages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  if (!page.disabled) {
                    setActivePage(page.id );
                    setMobileSidebarOpen(false);
                  }
                }}
                disabled={page.disabled}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activePage === page.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : page.disabled
                    ? 'text-gray-600 cursor-not-allowed opacity-50'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <page.icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <div className="flex-1 text-left">
                    <div className="font-medium">{page.label}</div>
                    <div className={`text-xs ${activePage === page.id ? 'text-white/70' : 'text-gray-500'}`}>
                      {page.description}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </nav>

          {/* Collapse Button */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <>
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm">Collapse</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div 
        className={`relative z-10 transition-all duration-300`}
        style={{ 
          marginLeft: window.innerWidth >= 1024 ? (sidebarCollapsed ? '80px' : '280px') : '0'
        }}
      >
        {renderPageContent()}
      </div>

      {/* User Detail Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedUser(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0d1137] to-[#0a0e27] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-br from-[#0d1137] to-[#0a0e27] border-b border-white/10 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-white">User Details</h2>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Full Name</span>
                    </div>
                    <div className="text-white font-semibold">{selectedUser.fullName}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Username</span>
                    </div>
                    <div className="text-white font-semibold">{selectedUser.username}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Email</span>
                    </div>
                    <div className="text-white font-semibold break-all">{selectedUser.email}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Phone</span>
                    </div>
                    <div className="text-white font-semibold">{selectedUser.phone}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Country</span>
                    </div>
                    <div className="text-white font-semibold">{selectedUser.country}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">Document Type</span>
                    </div>
                    <div className="text-white font-semibold uppercase">{selectedUser.documentType}</div>
                  </div>
                </div>

                {/* Wallets */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-cyan-400" />
                    Wallets
                  </h3>
                  <div className="grid gap-3">
                    {[
                      { label: 'Main Wallet', value: selectedUser.mainWallet },
                      { label: 'Deposit Wallet', value: selectedUser.depositWallet },
                      { label: 'Withdraw Wallet', value: selectedUser.withdrawWallet },
                      { label: 'Referral Wallet', value: selectedUser.referralWallet },
                      { label: 'Generation Wallet', value: selectedUser.generationWallet },
                      { label: 'ARBX Wallet', value: selectedUser.arbxWallet },
                    ].map((wallet, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-gray-400 mb-1">{wallet.label}</div>
                        <div className="text-sm text-white font-mono break-all">{wallet.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Referrers */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    Referrer Hierarchy (5 Levels)
                  </h3>
                  <div className="space-y-2">
                    {selectedUser.referrers.map((ref) => (
                      <div key={ref.level} className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
                          L{ref.level}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold">{ref.name}</div>
                          <div className="text-xs text-gray-400">{ref.username} • {ref.email}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Images */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Document Images</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedUser.documentImages.map((img , idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                        <img src={img} alt={`Document ${idx + 1}`} className="w-full h-64 object-cover" />
                        <div className="p-2 bg-white/5 text-center text-sm text-gray-400">
                          {selectedUser.documentType === 'passport' ? 'Passport' : idx === 0 ? 'NID Front' : 'NID Back'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Change */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
                  <h3 className="text-lg font-bold text-white mb-4">Update Status</h3>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <select
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-cyan-500/50 focus:outline-none"
                      disabled={selectedUser.status !== 'pending'}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button
                      onClick={handleStatusChange}
                      disabled={selectedUser.status !== 'pending' || userStatus === selectedUser.status}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Update Status
                    </button>
                  </div>
                  {selectedUser.status !== 'pending' && (
                    <div className="mt-3 text-sm text-yellow-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Status can only be changed for pending users
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
