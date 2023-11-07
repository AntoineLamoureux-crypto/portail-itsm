import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Connexion from './components/pages/connexion/Connexion';
import Réinitialisation from './components/pages/connexion/Réinitialisation';
import LogedInLayout from './components/layout/LogedInLayout';
import InscriptionService from './components/pages/inscription/InscriptionService';
import TableauDeBord from './components/pages/tableau-de-bord/TableauDeBord';
import MesBillets from './components/pages/mes-billets/MesBillets';
import Communiqués from './components/pages/communiques/Communiqués';
import ÉtatsDesServices from './components/pages/etats-des-services/ÉtatsDesServices';
import BaseDeConnaissances from './components/pages/base-de-connaissances/BaseDeConnaissances';
import DefaultTheme from './themes/DefaultTheme';
import Personalisation from './components/pages/mon-profil/personalisation/Personalisation';
import { AppProvider } from './AppProvider';
import BilletDetails from './components/pages/mes-billets/BilletDetails';
import MonProfil from './components/pages/mon-profil/MonProfile';

export default function App() {
  const [activeColorTheme, activateColorTheme] = useState(DefaultTheme);

  return (
    <ChakraProvider theme={activeColorTheme}>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/">
              <Route path="connexion" element={<Connexion />} />
              <Route
                path="connexion/reinitialisation"
                element={<Réinitialisation />}
              />
              <Route
                path="inscription-service"
                element={<InscriptionService />}
              />
            </Route>

            <Route path="/compte" element={<LogedInLayout />}>
              <Route path="tableau-de-bord" element={<TableauDeBord />} />
              <Route path="mes-billets" element={<MesBillets />} />
              <Route path="mes-billets/:id" element={<BilletDetails />} />
              <Route path="communiques" element={<Communiqués />} />
              <Route path="etats-des-services" element={<ÉtatsDesServices />} />
              <Route path="reglages" element={<MonProfil />} />
              <Route
                path="base-de-connaissances"
                element={<BaseDeConnaissances />}
              />

              <Route
                path="personalisation"
                element={
                  <Personalisation
                    activateColorTheme={activateColorTheme}
                    activeColorTheme={activeColorTheme}
                  />
                }
              />
            </Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
