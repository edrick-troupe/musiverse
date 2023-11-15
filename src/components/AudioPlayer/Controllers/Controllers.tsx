import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Controllers.scss';

import {
  RiPauseFill,
  RiPlayFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from 'react-icons/ri';

import { PlaylistData } from '@customTypes/Playlist';

interface ControllersProps {
  playlist: PlaylistData[];
  currentTrackId: number;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  discRef: React.RefObject<HTMLDivElement>;
}

export default function Controllers({
  playlist,
  currentTrackId,
  isPlaying,
  setIsPlaying,
  discRef,
}: ControllersProps) {
  const navigate = useNavigate();

  const handlePlayPauseButton = () => {
    setIsPlaying(!isPlaying);
  };

  const handleChangeTrack = (value: number) => {
    setIsPlaying(false);
    navigate(`/playlist/track/${currentTrackId + value}`);
  };

  useEffect(() => {
    discRef.current?.classList.remove('spinning');
  }, [currentTrackId, discRef]);

  return (
    <div
      id="controllers"
      className="mx-auto mt-auto flex w-10/12 justify-between px-space-x-xs py-space-y-xxs"
    >
      {/* Previous Track */}
      <button
        type="button"
        disabled={currentTrackId === 1}
        className={`controller-btn ${
          currentTrackId === 1 ? 'controller-btn__disabled' : ''
        }`}
        onClick={() => handleChangeTrack(-1)}
      >
        <RiSkipBackFill />
      </button>
      {/* Play/Pause */}
      <button
        type="button"
        className="controller-btn"
        onClick={() => handlePlayPauseButton()}
      >
        {isPlaying ? <RiPauseFill /> : <RiPlayFill />}
      </button>
      {/* Next Track */}
      <button
        type="button"
        disabled={currentTrackId === playlist.length}
        className={`controller-btn ${
          currentTrackId === playlist.length ? 'controller-btn__disabled' : ''
        }`}
        onClick={() => handleChangeTrack(1)}
      >
        <RiSkipForwardFill />
      </button>
    </div>
  );
}
