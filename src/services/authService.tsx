import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('kls_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (role: UserRole) => {
    const newUser: User = { 
      id: '1', 
      name: 'Chandu Goru', 
      email: 'chandugoru11@gmail.com',
      role,
      institution: role === UserRole.SUPER_ADMIN ? 'KEP Team' : 'KLS Engineering College',
      department: role === UserRole.STUDENT || role === UserRole.FACULTY ? 'Electronics & Communication' : undefined
    };
    setUser(newUser);
    localStorage.setItem('kls_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kls_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
