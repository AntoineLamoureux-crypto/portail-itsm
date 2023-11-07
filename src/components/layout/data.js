import {
  FiTag,
  FiBook,
  FiActivity,
  FiSettings,
  FiInbox,
  FiEdit,
} from 'react-icons/fi';
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineFileAdd, AiOutlineQuestion } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const TableauDeBord = {
  name: 'Tableau de bord',
  icon: RiDashboardFill,
  path: '/compte/tableau-de-bord',
};

const MesBillets = {
  name: 'Mes billets',
  icon: FiTag,
  path: '/compte/mes-billets',
};

const Communiques = {
  name: 'Communiqués',
  icon: FiInbox,
  path: '/compte/communiques',
};

const EtatsDesServices = {
  name: 'État des services',
  icon: FiActivity,
  path: '/compte/etats-des-services',
};

const BaseDeConnaissances = {
  name: 'Base de connaissances',
  icon: FiBook,
  path: '/compte/base-de-connaissances',
};

const Reglages = {
  name: 'Réglages',
  icon: FiSettings,
  path: '/compte/reglages',
};

const Personalisation = {
  name: 'Personalisation',
  icon: FiEdit,
  path: '/compte/personalisation',
};

const BilletDetail = {
  name: 'Détails du billet',
  icon: FiEdit,
  path: '/compte/mes-billets/:id',
};

export const pages = [
  TableauDeBord,
  MesBillets,
  Communiques,
  EtatsDesServices,
  BaseDeConnaissances,
  Reglages,
  Personalisation,
  BilletDetail,
];

export const sideBarPages = [
  TableauDeBord,
  MesBillets,
  Communiques,
  EtatsDesServices,
  BaseDeConnaissances,
];

export default function useCurrentPage() {
  const currentPath = useLocation();
  let currentPage;
  if (currentPath.pathname.includes('/compte/mes-billets/')) {
    currentPage = MesBillets;
  } else {
    currentPage = pages.find(page => {
      return page.path === currentPath.pathname;
    });
  }

  return currentPage;
}

export const sideBarActions = [
  {
    title: 'Soumettre',
    subTitle: 'une demande',
    value: 'Demande',
    icon: AiOutlineFileAdd,
  },
  {
    title: 'Soumettre',
    subTitle: 'un problème',
    value: 'Problème',
    icon: BiError,
  },
  {
    title: '',
    subTitle: 'Je ne sais pas',
    value: 'Je ne sais pas',
    icon: AiOutlineQuestion,
  },
];
