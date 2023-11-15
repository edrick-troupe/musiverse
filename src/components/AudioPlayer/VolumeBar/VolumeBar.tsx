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

  return (
    <div id="volume-bar" className="mx-auto mt-space-y-xs">
      <div id="track-display__volume">
        <label
          htmlFor="track-display__volume"
          className="volume-bar flex items-center justify-center gap-x-4"
        >
          <button type="button" className="icon" onClick={() => handleMute()}>
            {isMuted ? <RiVolumeMuteFill /> : <RiVolumeDownFill />}
          </button>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="10"
            ref={volumeRef}
            value={volume}
            onChange={() => handleChangeVolume()}
          />
        </label>
      </div>
    </div>
  );
}
