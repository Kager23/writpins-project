import React from 'react';
import { IonCard, IonCardContent, IonInput, IonButton } from '@ionic/react';
import { Pin } from '../data/pins';

interface PinFormProps {
  onPinAdded: (pin: Pin) => void; // Callback pour notifier le composant parent de l'ajout d'une épingle
}

const PinForm: React.FC<PinFormProps> = ({ onPinAdded }) => {
  // Déclare les états pour stocker les données du formulaire
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  // Fonction pour gérer la création de nouvelle épingle
  const handleCreatePin = () => {
    // Crée une nouvelle épingle avec les données du formulaire
    const newPin: Pin = {
      id: Date.now().toString(), // Génère un ID unique pour la nouvelle épingle
      title,
      text,
      source: 'Nouvelle épingle',
      tags: [],
      date: new Date().toISOString(),
    };

    // Appelle la fonction de rappel pour ajouter la nouvelle épingle à l'état local du composant Home
    onPinAdded(newPin);

    // Efface les champs du formulaire après la création de l'épingle
    setTitle('');
    setText('');
  };

  return (
    <IonCard>
      <IonCardContent>
        <IonInput
          value={title}
          placeholder="Titre"
          onIonChange={(e) => setTitle(e.detail.value!)}
        />
        <IonInput
          value={text}
          placeholder="Texte"
          onIonChange={(e) => setText(e.detail.value!)}
        />
        <IonButton expand="block" onClick={handleCreatePin}>
          Créer une nouvelle épingle
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PinForm;
