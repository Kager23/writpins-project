import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../auth'; // Importez useAuth depuis le fichier auth.ts

const Login: React.FC = () => {
  const history = useHistory();
  const { setLoggedIn } = useAuth(); // Obtenez la fonction setLoggedIn depuis useAuth

  const handleLogin = () => {
    // Logique de connexion (à implémenter plus tard)
    // Pour l'instant, redirige simplement vers la page d'accueil
    setLoggedIn(true); // Mettez à jour l'état de connexion
    history.push('/home');
  };

  return (
    <IonPage>
      <IonContent>
        <h1>Login</h1>
        <IonButton onClick={handleLogin}>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
