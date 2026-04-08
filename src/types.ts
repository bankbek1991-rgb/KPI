export interface Metric {
  id: number;
  name: string;
  unit: string;
  target: string;
  period: string;
  maxScore: number;
}

export interface Role {
  id: string;
  title: string;
  metrics: Metric[];
}

export interface Department {
  id: string;
  name: string;
  roles: Role[];
}

export interface Employee {
  id: string;
  name: string;
  departmentId: string;
  roleId: string;
  photoUrl?: string;
}

export interface Evaluation {
  id: string;
  employeeId: string;
  month: number;
  year: number;
  scores: Record<number, number>; // metricId -> score
  totalScore: number;
  status: 'draft' | 'submitted';
  comment?: string;
  createdAt: string;
}
