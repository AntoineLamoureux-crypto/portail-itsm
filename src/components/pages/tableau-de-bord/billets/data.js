import {
  FiCpu,
  FiDisc,
  FiHardDrive,
  FiImage,
  FiMessageSquare,
  FiPackage,
  FiPrinter,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { AiOutlineTool } from 'react-icons/ai';

export const initialValues = {
  id: '',
  typeDeBillet: '',
  typeDeService: '',
  typeDeMateriel: '',
  categorie: '',
  coordonnees: '',
  dateRequis: '',
  superieur: '',
  objet: '',
  etat: '',
};

export const steps = [
  {
    id: 1,
    sections: [
      {
        label: 'Type de billet',
        fields: [
          {
            name: 'typeDeBillet',
            type: 'PanelInput',
            options: [
              { value: 'Demande', icon: FiPackage },
              { value: 'Problème', icon: FiZap },
              { value: 'Je ne sais pas', icon: null },
            ],
          },
        ],
      },
      {
        label: 'Service',
        fields: [
          {
            name: 'typeDeService',
            type: 'PanelInput',
            options: [
              { value: "Technologie de l'information", icon: FiCpu },
              { value: 'Ressources humaines', icon: FiUsers },
              { value: 'Gestion du bâtiment', icon: AiOutlineTool },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    sections: [
      {
        label: 'Catégorie',
        fields: [
          {
            name: 'categorie',
            type: 'PanelInput',
            options: [
              {
                value: 'Général',
                icon: FiMessageSquare,
              },
              { value: 'Équipement informatique', icon: FiHardDrive },
              { value: 'Logiciel / Application', icon: FiDisc },
              { value: 'Imprimante', icon: FiPrinter },
              { value: 'Catégorie 5', icon: FiImage },
              { value: 'Catégorie 6', icon: FiImage },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    sections: [
      {
        label: 'Objet de la requête',
        fields: [
          {
            name: 'objet',
            type: 'RadioInput',
            options: [
              { value: 'Demande de matériel informatique' },
              {
                value: 'Demande de matériel informatique stantard',
              },
              { value: "Déménagement d'équipement" },
              { value: "Emprunt d'équipement" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    sections: [
      {
        label: 'Informations générales',
        fields: [
          {
            name: 'coordonnees',
            type: 'TextInput',
            label: 'Coordonnées',
            helperText:
              "Veuillez inscrire le numéro de téléphone et/ou l'adresse courriel pour vous rejoindre.",
          },
        ],
      },
      {
        label: 'Informations sur la demande',
        rows: [
          {
            fields: [
              {
                name: 'superieur',
                type: 'TextInput',
                label: 'Votre supérieur immédiat',
              },
              {
                name: 'dateRequis',
                type: 'DateInput',
                label: 'Date requis',
              },
            ],
          },
        ],
      },
      {
        label: 'Type de matériel',
        rows: [
          {
            fields: [
              {
                name: 'typeDeMateriel',
                type: 'RadioInput',
                label: 'Type',
                options: [
                  {
                    value: 'Ordinateur',
                  },
                  {
                    value: 'Périphérique non stantards',
                  },
                  { value: 'Machine lourde' },
                  { value: 'Autre' },
                ],
              },
              {
                name: 'specificationMateriel',
                type: 'TextInput',
                label: 'Spécifiez',
              },
            ],
          },
        ],
      },
    ],
  },
];
