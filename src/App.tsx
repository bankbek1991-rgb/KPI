/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardCheck, 
  BarChart3, 
  ChevronRight, 
  Search, 
  Plus, 
  ArrowLeft,
  Award,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Calendar,
  User as UserIcon,
  Building2,
  Lock,
  LogIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { DEPARTMENTS, EVALUATION_SCALE } from './constants';
import { Employee, Evaluation, Department, Role } from './types';

// Mock Data
const MOCK_EMPLOYEES: Employee[] = [
  { id: '1', name: 'Mansur Xudayberdiyev', departmentId: 'rtt-markazi', roleId: 'markaz-boshligi' },
  { id: '5', name: 'Boyirov Akbar', departmentId: 'joriy-etish', roleId: 'kontent-menejer' },
  { id: '6', name: 'Jaloliddin Baxramov', departmentId: 'xavfsizlik', roleId: 'bo-lim-boshligi-xavfsizlik' },
  { id: '7', name: 'Xurramov Abrorbek', departmentId: 'tarmoqlar', roleId: 'muhandis-dasturchi-tarmoq' },
  { id: '8', name: 'Xakimova Farangis', departmentId: 'texnik-quvvatlash', roleId: 'muhandis-dasturchi-texnik' },
];

const MOCK_EVALUATIONS: Evaluation[] = [
  { 
    id: 'e1', 
    employeeId: '1', 
    month: 3, 
    year: 2026, 
    scores: { 1: 18, 2: 14, 3: 10, 4: 18, 5: 9, 6: 14, 7: 9 }, 
    totalScore: 92, 
    status: 'submitted', 
    createdAt: '2026-03-31' 
  },
  { 
    id: 'e5', 
    employeeId: '5', 
    month: 3, 
    year: 2026, 
    scores: { 1: 16, 2: 15, 3: 12, 4: 15, 5: 8, 6: 15, 7: 7 }, 
    totalScore: 88, 
    status: 'submitted', 
    createdAt: '2026-03-31' 
  },
  { 
    id: 'e6', 
    employeeId: '6', 
    month: 3, 
    year: 2026, 
    scores: { 1: 17, 2: 16, 3: 14, 4: 17, 5: 9, 6: 16, 7: 8 }, 
    totalScore: 97, 
    status: 'submitted', 
    createdAt: '2026-03-31' 
  },
  { 
    id: 'e7', 
    employeeId: '7', 
    month: 3, 
    year: 2026, 
    scores: { 1: 15, 2: 14, 3: 12, 4: 14, 5: 7, 6: 14, 7: 6 }, 
    totalScore: 82, 
    status: 'submitted', 
    createdAt: '2026-03-31' 
  },
  { 
    id: 'e8', 
    employeeId: '8', 
    month: 3, 
    year: 2026, 
    scores: { 1: 18, 2: 17, 3: 15, 4: 18, 5: 10, 6: 17, 7: 9 }, 
    totalScore: 98, 
    status: 'submitted', 
    createdAt: '2026-03-31' 
  },
];

type View = 'dashboard' | 'employees' | 'evaluate' | 'reports';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginView, setIsLoginView] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Login yoki parol noto\'g\'ri');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsLoginView(false);
    setLoginForm({ username: '', password: '' });
  };

  const getEmployeeById = (id: string) => MOCK_EMPLOYEES.find(e => e.id === id);
  const getDepartmentById = (id: string) => DEPARTMENTS.find(d => d.id === id);
  const getRoleById = (deptId: string, roleId: string) => 
    getDepartmentById(deptId)?.roles.find(r => r.id === roleId);

  const getScale = (score: number) => {
    return EVALUATION_SCALE.find(s => score >= s.range[0] && score <= s.range[1]) || EVALUATION_SCALE[3];
  };

  const filteredEmployees = MOCK_EMPLOYEES.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    getDepartmentById(e.departmentId)?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statsData = useMemo(() => {
    const excellent = MOCK_EVALUATIONS.filter(e => e.totalScore >= 90).length;
    const good = MOCK_EVALUATIONS.filter(e => e.totalScore >= 75 && e.totalScore < 90).length;
    const satisfactory = MOCK_EVALUATIONS.filter(e => e.totalScore >= 60 && e.totalScore < 75).length;
    const unsatisfactory = MOCK_EVALUATIONS.filter(e => e.totalScore < 60).length;

    return [
      { name: "A'lo", value: excellent, color: '#22c55e' },
      { name: 'Yaxshi', value: good, color: '#3b82f6' },
      { name: 'Qoniqarli', value: satisfactory, color: '#eab308' },
      { name: 'Qoniqarsiz', value: unsatisfactory, color: '#ef4444' },
    ];
  }, []);

  const SidebarItem = ({ icon: Icon, label, view }: { icon: any, label: string, view: View }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        currentView === view 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  if (!isAuthenticated) {
    if (!isLoginView) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full glass-card p-12 flex flex-col items-center gap-8"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
              <Building2 size={40} />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Guliston davlat pedagogika instituti Raqamli ta'lim texnologiyalari markazi
              </h1>
              <p className="text-xl text-slate-500 font-medium">
                Xodimlarining KPI platformasiga xush kelibsiz
              </p>
            </div>
            <button 
              onClick={() => setIsLoginView(true)}
              className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Kirish
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          <p className="mt-8 text-slate-400 text-sm font-medium">© 2026 GulDPI RTTM. Barcha huquqlar himoyalangan.</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-card p-8"
        >
          <button 
            onClick={() => setIsLoginView(false)}
            className="mb-6 text-slate-500 hover:text-slate-900 flex items-center gap-2 text-sm font-bold transition-colors"
          >
            <ArrowLeft size={16} />
            Ortga
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Tizimga kirish</h2>
            <p className="text-slate-500 text-sm mt-1">Davom etish uchun hisobingizga kiring</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Login</label>
              <div className="relative">
                <input 
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="admin"
                />
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Parol</label>
              <div className="relative">
                <input 
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            {loginError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg flex items-center gap-2"
              >
                <AlertCircle size={14} />
                {loginError}
              </motion.div>
            )}

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <LogIn size={20} />
              Tizimga kirish
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">GulDPI RTTM</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">KPI Platformasi</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem icon={LayoutDashboard} label="Boshqaruv paneli" view="dashboard" />
          <SidebarItem icon={Users} label="Xodimlar" view="employees" />
          <SidebarItem icon={BarChart3} label="Hisobotlar" view="reports" />
        </nav>

        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
              <UserIcon size={16} className="text-slate-600" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Admin Foydalanuvchi</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full text-xs font-bold text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors uppercase tracking-widest"
          >
            Chiqish
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <header className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Xush kelibsiz!</h2>
                  <p className="text-slate-500 mt-1">Markaz xodimlari faoliyatining umumiy ko'rsatkichlari</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200">
                  <Calendar size={16} />
                  Aprel, 2026
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-6 border-l-4 border-l-blue-600">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Users size={20} />
                    </div>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium">Jami xodimlar</h3>
                  <p className="text-3xl font-bold mt-1">{MOCK_EMPLOYEES.length} ta</p>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-green-600">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                      <TrendingUp size={20} />
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {MOCK_EVALUATIONS.length > 0 
                        ? Math.round(MOCK_EVALUATIONS.reduce((acc, curr) => acc + curr.totalScore, 0) / MOCK_EVALUATIONS.length) 
                        : 0}% o'rtacha
                    </span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium">Umumiy samaradorlik</h3>
                  <p className="text-3xl font-bold mt-1">
                    {MOCK_EVALUATIONS.length > 0 
                      ? getScale(MOCK_EVALUATIONS.reduce((acc, curr) => acc + curr.totalScore, 0) / MOCK_EVALUATIONS.length).label 
                      : 'Noma\'lum'}
                  </p>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-yellow-600">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                      <ClipboardCheck size={20} />
                    </div>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium">Baholangan xodimlar</h3>
                  <p className="text-3xl font-bold mt-1">{MOCK_EVALUATIONS.length} / {MOCK_EMPLOYEES.length}</p>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-red-600">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <AlertCircle size={20} />
                    </div>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium">Kechikkan hisobotlar</h3>
                  <p className="text-3xl font-bold mt-1">0 ta</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Samaradorlik taqsimoti
                  </h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={statsData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                        <Tooltip 
                          cursor={{ fill: '#f8fafc' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
                          {statsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-6">Oxirgi baholashlar</h3>
                  <div className="space-y-4">
                    {MOCK_EVALUATIONS.map(evalItem => {
                      const employee = getEmployeeById(evalItem.employeeId);
                      const scale = getScale(evalItem.totalScore);
                      return (
                        <div key={evalItem.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 font-bold text-slate-400">
                              {employee?.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold">{employee?.name}</p>
                              <p className="text-xs text-slate-500">{evalItem.createdAt}</p>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${scale.color}`}>
                            {evalItem.totalScore}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button 
                    onClick={() => setCurrentView('employees')}
                    className="w-full mt-6 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    Barchasini ko'rish
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'employees' && (
            <motion.div
              key="employees"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <header className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Xodimlar ro'yxati</h2>
                  <p className="text-slate-500 mt-1">Markazning barcha bo'limlari va lavozimlari bo'yicha</p>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Qidirish..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all w-64"
                    />
                  </div>
                  <button className="btn-primary flex items-center gap-2">
                    <Plus size={18} />
                    Xodim qo'shish
                  </button>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmployees.map(employee => {
                  const dept = getDepartmentById(employee.departmentId);
                  const role = getRoleById(employee.departmentId, employee.roleId);
                  const lastEval = MOCK_EVALUATIONS.find(ev => ev.employeeId === employee.id);
                  const scale = lastEval ? getScale(lastEval.totalScore) : null;

                  return (
                    <motion.div 
                      key={employee.id}
                      whileHover={{ y: -4 }}
                      className="glass-card p-6 hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => {
                        setSelectedEmployee(employee);
                        setCurrentView('evaluate');
                      }}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                          {employee.name.charAt(0)}
                        </div>
                        {scale && (
                          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${scale.color}`}>
                            {scale.label}
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{employee.name}</h4>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Building2 size={14} />
                          <span className="truncate">{dept?.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Award size={14} />
                          <span>{role?.title}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Oxirgi natija</p>
                          <p className="text-lg font-bold text-slate-700">{lastEval ? `${lastEval.totalScore}%` : 'Baholanmagan'}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {currentView === 'evaluate' && selectedEmployee && (
            <motion.div
              key="evaluate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-5xl mx-auto space-y-8"
            >
              <button 
                onClick={() => setCurrentView('employees')}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium"
              >
                <ArrowLeft size={18} />
                Ro'yxatga qaytish
              </button>

              <div className="glass-card p-8">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-3xl font-bold text-blue-600">
                    {selectedEmployee.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{selectedEmployee.name}</h2>
                    <p className="text-slate-500 font-medium">{getRoleById(selectedEmployee.departmentId, selectedEmployee.roleId)?.title}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                      <Building2 size={12} />
                      {getDepartmentById(selectedEmployee.departmentId)?.name}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-bottom border-slate-100">
                    <h3 className="text-xl font-bold">KPI Ko'rsatkichlari</h3>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Davr</p>
                        <p className="font-bold">Mart, 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden border border-slate-200 rounded-2xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">№</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">KPI Ko'rsatkichi</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maqsad</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Maks. Ball</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-32">Ball</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getRoleById(selectedEmployee.departmentId, selectedEmployee.roleId)?.metrics.map((metric, idx) => (
                          <tr key={metric.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-slate-400">{idx + 1}</td>
                            <td className="px-6 py-4">
                              <p className="text-sm font-bold text-slate-800">{metric.name}</p>
                              <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{metric.period} • {metric.unit}</p>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm font-bold text-green-600">{metric.target}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm font-bold text-slate-600">{metric.maxScore}</span>
                            </td>
                            <td className="px-6 py-4">
                              <input 
                                type="number" 
                                max={metric.maxScore}
                                min={0}
                                placeholder="0"
                                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-center"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between items-center pt-8">
                    <div className="p-6 bg-slate-900 rounded-2xl text-white min-w-[240px]">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Umumiy natija</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">0</span>
                        <span className="text-xl font-medium text-slate-400">/ 100</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="btn-secondary">Qoralama sifatida saqlash</button>
                      <button className="btn-primary px-8">Tasdiqlash va yuborish</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'reports' && (
            <motion.div
              key="reports"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <header>
                <h2 className="text-3xl font-bold text-slate-900">Tahliliy hisobotlar</h2>
                <p className="text-slate-500 mt-1">Markaz faoliyatining chuqurlashtirilgan statistikasi</p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-8">Bo'limlar bo'yicha o'rtacha ball</h3>
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        layout="vertical" 
                        data={DEPARTMENTS.map(d => ({ 
                          name: d.name.split(' ').slice(0, 2).join(' ') + '...', 
                          score: Math.floor(Math.random() * 20) + 75 
                        }))}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, width: 100 }} width={120} />
                        <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                        <Bar dataKey="score" fill="#3b82f6" radius={[0, 6, 6, 0]} barSize={30} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-8">Baholash natijalari ulushi</h3>
                  <div className="h-[350px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={statsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={8}
                          dataKey="value"
                        >
                          {statsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-4xl font-bold text-slate-900">18</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Baholangan</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {statsData.map(stat => (
                      <div key={stat.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.color }} />
                        <span className="text-xs font-semibold text-slate-600">{stat.name}: {stat.value} ta</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Baholash shkalasi va rag'batlantirish</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {EVALUATION_SCALE.map(scale => (
                    <div key={scale.label} className={`p-6 rounded-2xl border-2 ${scale.color.split(' ').slice(0, 2).join(' ')}`}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-black">{scale.range[0]}-{scale.range[1]}%</span>
                        <Award size={24} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{scale.label}</h4>
                      <p className="text-sm font-medium opacity-80">{scale.reward}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
