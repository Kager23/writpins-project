// Home.tsx

import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { Pin } from '../data/pins'; 
import PinListItem from '../components/PinListItem'; // Importe PinListItem
import PinForm from '../components/PinForm'; // Importe PinForm
import { pins as initialPins } from '../data/pins'; // Importe le tableau de pins directement

const Home: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>(initialPins); // Utilise le tableau de pins initial comme état initial

  const handleAddPin = (newPin: Pin) => {
    setPins([...pins, newPin]); // Ajoute la nouvelle épingle à la liste existante
  };

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map((pin) => (
            <PinListItem key={pin.id} pin={pin} />
          ))}
        </IonList>

        <PinForm onPinAdded={handleAddPin} /> {/* Passe la fonction de rappel à PinForm */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
