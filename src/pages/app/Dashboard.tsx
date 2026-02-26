import React from 'react';
import { useAuth } from '../../services/authService';
import { UserRole } from '../../types';
import { UserDashboard as StudentDashboard } from './UserDashboard';
import { FacultyDashboard } from './FacultyDashboard';
import { CollegeAdminDashboard } from './CollegeAdminDashboard';
import { SuperAdminDashboard } from './SuperAdminDashboard';

export function Dashboard() {
  const { user } = useAuth();

  switch (user?.role) {
    case UserRole.SUPER_ADMIN:
      return <SuperAdminDashboard />;
    case UserRole.COLLEGE_ADMIN:
      return <CollegeAdminDashboard />;
    case UserRole.FACULTY:
      return <FacultyDashboard />;
    case UserRole.STUDENT:
    default:
      return <StudentDashboard />;
  }
}
