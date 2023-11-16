import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './AudioPlayer.scss';

import { PlaylistData } from '@customTypes/Playlist';

import LoadingState from '@components/LoadingState/LoadingState';
import ErrorState from '@components/ErrorState/ErrorState';
import TrackDisplay from './TrackDisplay/TrackDisplay';
import Controllers from './Controllers/Controllers';
import VolumeBar from './VolumeBar/VolumeBar';

interface AudioPlayerProps {
  playlist: PlaylistData[];
  isLoading: boolean;
  error: boolean;
}

export default function AudioPlayer({
  playlist,
  isLoading,
  error,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progression, setProgression] = useState<number | undefined>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef<number | null>(null);
  const discRef = useRef<HTMLDivElement>(null);

  const { id } = useParams();
  const currentTrackId = Number(id);
  const currentTrack = playlist.find((track) => track.id === currentTrackId);
  const currentTrackDuration = audioRef.current?.duration;

  const navigate = useNavigate();

  const repeat = useCallback(() => {
    setProgression(audioRef.current?.currentTime);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (progression === currentTrackDuration) {
      setIsPlaying(false);
      setProgression(0);
    }
  }, [progression, currentTrackDuration]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !currentTrack) {
    return <ErrorState />;
  }

  return (
    <div id="audio-player" className="flex h-full flex-col justify-center">
      <div
        id="track-description"
        className="mx-auto w-9/12 py-space-y-sm text-center "
      >
        <h3 className="font-title">{currentTrack.description}</h3>
        {currentTrack.other && (
          <p className="pt-space-y-xxs italic">
            mention spéciale : {currentTrack.other}
          </p>
        )}
      </div>
      <div
        id="track-card"
        className="mx-auto flex w-9/12 flex-col items-center gap-y-space-y-xs py-space-y-xs"
      >
        <TrackDisplay
          currentTrack={currentTrack}
          audioRef={audioRef}
          discRef={discRef}
          isPlaying={isPlaying}
          progression={progression}
          currentTrackDuration={currentTrackDuration}
        />
        <Controllers
          playlist={playlist}
          currentTrackId={currentTrackId}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          discRef={discRef}
        />
        <VolumeBar audioRef={audioRef} />
      </div>
      <div id="return-playlist" className="flex justify-center pt-8">
        <button type="button" onClick={() => navigate('/playlist')}>
          Retour à la playlist
        </button>
      </div>
    </div>
  );
}
