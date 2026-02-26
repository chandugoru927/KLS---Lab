export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  COLLEGE_ADMIN = 'COLLEGE_ADMIN',
  FACULTY = 'FACULTY',
  STUDENT = 'STUDENT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  institution?: string;
  department?: string;
}
