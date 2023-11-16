import Lottie from 'lottie-react';
import loadingAstronaut from '@assets/lottie/loading-astronaut.json';

export default function LoadingState() {
  return (
    <div
      id="loading"
      className="flex h-screen w-full items-center justify-center"
    >
      <Lottie
        animationData={loadingAstronaut}
        style={{
          height: '50vh',
          width: 'fit-content',
        }}
      />
    </div>
  );
}
