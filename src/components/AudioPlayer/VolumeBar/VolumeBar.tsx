import { useEffect, useRef, useState } from 'react';

import './VolumeBar.scss';

import { RiVolumeDownFill, RiVolumeMuteFill } from 'react-icons/ri';

interface VolumeBarProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function VolumeBar({ audioRef }: VolumeBarProps) {
  const [volume, setVolume] = useState(4);
  const [isMuted, setIsMuted] = useState(false);

  const volumeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (volume === 0) {
      setIsMuted(true);
      audioRef.current!.volume = volume;
      audioRef.current!.muted = true;
    } else {
      setIsMuted(false);
      audioRef.current!.volume = Number(volume) / 10;
      audioRef.current!.muted = false;
    }
  }, [volume, audioRef]);

  const handleChangeVolume = () => {
    setVolume(Number(volumeRef.current!.value));
    audioRef.current!.volume = Number(volume) / 10;
  };

  const handleMute = () => {
    if (isMuted) {
      setVolume(1);
    } else {
      setVolume(0);
    }

    setIsMuted(!isMuted);
    audioRef.current!.muted = !isMuted;
  };

  const handleProgressBarStyle = () => {
    volumeRef.current!.style.background = `linear-gradient(to right, rgb(217, 176, 255) 0%, rgb(100, 61, 136) ${
      volume * 10
    }%, #F3C4FB ${volume * 10}%, #F3C4FB 100%)`;
  };

  return (
    <div id="volume-bar" className="mx-auto mt-space-y-xs">
      <label
        htmlFor="volume-bar__input"
        className="volume-bar flex items-center justify-center gap-x-8"
      >
        <button
          type="button"
          id="volume-bar__icon"
          onClick={() => handleMute()}
        >
          {isMuted ? <RiVolumeMuteFill /> : <RiVolumeDownFill />}
        </button>
        <input
          type="range"
          id="volume-bar__input"
          name="volume-bar__input"
          min="0"
          max="10"
          ref={volumeRef}
          value={volume}
          onChange={() => handleChangeVolume()}
          onMouseMove={() => handleProgressBarStyle()}
          onClick={() => handleProgressBarStyle()}
        />
      </label>
    </div>
  );
}
