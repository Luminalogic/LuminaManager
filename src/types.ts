export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'lost' | 'converted';
export type ProjectStatus = 'planning' | 'development' | 'testing' | 'completed' | 'maintenance';
export type FinancialType = 'setup' | 'mrr' | 'expense';
export type FinancialStatus = 'pending' | 'paid' | 'cancelled';
export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled';
export type MeetingType = 'online' | 'presencial';
export type ProjectType = 'custom' | 'micro-saas';
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type NotificationType = 'lead' | 'task-deadline' | 'payment-pending' | 'payment-confirmed';

export interface Lead {
  id?: string;
  name: string;
  email: string;
  type: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
}

export interface Project {
  id?: string;
  name: string;
  clientId: string;
  status: ProjectStatus;
  budgetedHours: number;
  investedHours: number;
  setupFee: number;
  mrr: number;
  startDate: string;
  endDate: string;
  type: ProjectType;
}

export interface Task {
  id?: string;
  projectId: string;
  title: string;
  description: string;
  assignedTo: string;
  startDate: string;
  endDate: string;
  status: TaskStatus;
}

export interface FinancialRecord {
  id?: string;
  projectId: string;
  type: FinancialType;
  amount: number;
  date: string;
  status: FinancialStatus;
}

export interface Appointment {
  id?: string;
  name: string;
  email: string;
  date: string;
  time: string;
  type: MeetingType;
  status: AppointmentStatus;
}

export interface ProductCost {
  id?: string;
  name: string;
  baseCost: number;
  margin: number;
  finalPrice: number;
  details: string;
}

export interface Notification {
  id?: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface UserSettings {
  userId: string;
  notifications: {
    lead: boolean;
    taskDeadline: boolean;
    paymentPending: boolean;
    paymentConfirmed: boolean;
  };
}
