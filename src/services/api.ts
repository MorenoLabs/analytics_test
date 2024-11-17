import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface ResourceData {
  id: string;
  name: string;
  allocation: number;
  efficiency: number;
  workload: number;
  skills: string[];
}

export interface MetricData {
  id: string;
  name: string;
  value: number;
  impact: number;
  trend: { date: string; value: number }[];
  dependencies: string[];
}

export interface PredictionData {
  date: string;
  predicted: number;
  lower: number;
  upper: number;
}

export const resourceService = {
  getResources: () => api.get<ResourceData[]>('/resources'),
  updateResource: (id: string, data: Partial<ResourceData>) => 
    api.put<ResourceData>(`/resources/${id}`, data),
  createResource: (data: Omit<ResourceData, 'id'>) => 
    api.post<ResourceData>('/resources', data),
  deleteResource: (id: string) => api.delete(`/resources/${id}`),
};

export const metricService = {
  getMetrics: () => api.get<MetricData[]>('/metrics'),
  updateMetric: (id: string, data: Partial<MetricData>) =>
    api.put<MetricData>(`/metrics/${id}`, data),
};

export const predictionService = {
  getPredictions: (metric: string, timeframe: string) =>
    api.get<PredictionData[]>(`/predictions/${metric}`, {
      params: { timeframe },
    }),
};

export default api;