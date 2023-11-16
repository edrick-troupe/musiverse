import './ErrorState.scss';

import { useNavigate } from 'react-router-dom';

import Lottie from 'lottie-react';
import errorAstronaut from '@assets/lottie/error-astronaut.json';

export default function ErrorState() {
  const navigate = useNavigate();

  return (
    <div
      id="error"
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-slate-200 text-center"
    >
      <p id="error__message" className="mx-auto w-10/12">
        Aucune musique n&apos;a été trouvée
      </p>
      <Lottie
        animationData={errorAstronaut}
        style={{
          height: '50vh',
          width: 'fit-content',
        }}
      />
      <div id="return-home" className="font-subheadline">
        <button type="button" onClick={() => navigate('/')}>
          Retourner à l&apos;accueil
        </button>
      </div>
    </div>
  );
}
