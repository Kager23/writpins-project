import React from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';
import './PinListItem.css'; // Importe les styles CSS si nécessaire
import { Pin } from '../data/pins';

interface PinListItemProps {
  pin: Pin;
}

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
  // Récupère la première ligne de la citation
  const firstLine = pin.text ? pin.text.split('\n')[0] : '';


  // Limite la longueur de la citation à 50 caractères
  const truncatedText = firstLine.length > 50 ? firstLine.substring(0, 50) + '...' : firstLine;

  return (
    <IonItem routerLink={`/pin/${pin.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>{pin.title}</h2>
        <h3>
          <span className="date">
            <IonNote>{pin.date}</IonNote>
          </span>
        </h3>
        <p>{truncatedText}</p>
      </IonLabel>
    </IonItem>
  );
};

export default PinListItem;
