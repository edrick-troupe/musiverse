import { useNavigate } from 'react-router-dom';

import Lottie from 'lottie-react';
import flyingAstronaut from '@assets/lottie/flying-astronaut.json';

import './Home.scss';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      id="home"
      className="flex h-full flex-col items-center justify-evenly py-space-y-sm text-center"
    >
      <div id="headlines">
        <h1 className="font-headline pb-space-y-sm">Musiverse</h1>
        <h2 className="font-subheadline">Découvrez mon univers musical !</h2>
      </div>
      <div id="home__animation">
        <Lottie
          animationData={flyingAstronaut}
          style={{
            height: '50vh',
            width: 'fit-content',
          }}
        />
      </div>
      <div>
        <button
          id="getting-started"
          className="font-title uppercase"
          type="button"
          onClick={() => navigate('/playlist')}
        >
          Accéder à la playlist
        </button>
      </div>
    </div>
  );
}
