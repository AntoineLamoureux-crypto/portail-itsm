import { useState, createContext } from 'react';
import { useToast } from '@chakra-ui/react';
import _ from 'lodash';

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [app, setApp] = useState({ billets: [], brouillons: [] });

  const toast = useToast();

  function updateApp(field, value) {
    const mergedApp = { ...app, [field]: value };
    setApp(mergedApp);
  }

  function getAllBillets() {
    return _.concat(app.brouillons, app.billets);
  }

  function getBillet(billetId) {
    return _.find(getAllBillets(), billet => billet.id === billetId);
  }

  function getBilletsRecents() {
    const allBillets = getAllBillets();
    return allBillets;
  }

  function addBillet(nouveauBillet) {
    const id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

    app.billets.push({
      ...nouveauBillet,
      etat: 'Nouveau',
      id: id,
    });
    updateApp('billets', app.billets);

    toast({
      title: 'Succès!',
      position: 'bottom-right',
      description:
        'Votre billet a bien été créé. Notre équipe procédera à son analyse dès que possible.',
      status: 'success',
      duration: 6000,
      isClosable: true,
      variant: 'solid',
      containerStyle: {
        width: '300px',
        fontSize: 'md',
      },
    });
  }

  function getBrouillon(id) {
    return _.find(app.brouillons, billet => billet.id === id);
  }

  function addBrouillon(nouveauBillet, state) {
    const id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

    app.brouillons.push({
      ...nouveauBillet,
      etat: 'Brouillon',
      id: id,
      state: state,
    });

    updateApp('brouillons', app.brouillons);
    toast({
      title: 'Brouillon enregistré',
      position: 'bottom-right',
      description: 'Le brouillon #' + id + ' a été enregistré',
      status: 'info',
      duration: 6000,
      isClosable: true,
    });
  }

  function getBillets() {
    return _.clone(app.billets);
  }

  function getBrouillons() {
    return _.clone(app.brouillons);
  }

  function deleteBrouillon(data) {
    const newBrouillons = _.remove(
      'brouillons',
      billet => billet.id === data.id
    );
    updateApp('brouillons', newBrouillons);
    toast({
      title: 'Brouillon supprimé',
      position: 'bottom-right',
      description: 'Le brouillon #' + data.id + ' a été supprimé',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });
  }

  return (
    <appContext.Provider
      value={{
        app,
        updateApp,
        getBilletsRecents,
        getBillets,
        getBrouillons,
        getBillet,
        deleteBrouillon,
        getBrouillon,
        addBillet,
        addBrouillon,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appContext;
