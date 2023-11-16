import './NotFound.scss';

import { useNavigate } from 'react-router-dom';

import Lottie from 'lottie-react';
import notFoundAstronaut from '@assets/lottie/not_found-astronaut.json';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      id="not-found"
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-slate-200 text-center lg:flex-row-reverse"
    >
      <div
        id="not-found__message"
        className="flex flex-col items-center justify-center px-space-x-sm lg:h-full lg:grow"
      >
        <p className="font-subhealine">
          La page que vous recherchez n&apos;existe pas
        </p>
        <div className="hidden lg:flex">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-space-y-sm px-6 py-2 font-bold"
          >
            Retourner à l&apos;accueil
          </button>
        </div>
      </div>
      <Lottie
        animationData={notFoundAstronaut}
        style={{
          height: '50vh',
          width: 'fit-content',
        }}
      />
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-6 py-2 font-bold"
        >
          Retourner à l&apos;accueil
        </button>
      </div>
    </div>
  );
}
