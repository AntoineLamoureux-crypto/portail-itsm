import { FiAlertCircle, FiAlertTriangle, FiClock } from 'react-icons/fi';
export const etatsDesServices = [
  {
    title: 'Interruption de service',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiAlertTriangle, color: 'red.500' },
  },
  {
    title: 'Interruption de service',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiAlertCircle, color: 'orange.500' },
  },
  {
    title: 'Mise a jour du système',
    date: '10 juillet, 16h05',
    service: '[Nom du service]',
    icon: { data: FiClock, color: 'blue.500' },
  },
];
