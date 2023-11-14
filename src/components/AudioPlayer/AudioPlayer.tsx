import { useParams } from 'react-router-dom';

import './AudioPlayer.scss';

import { PlaylistData } from '@customTypes/Playlist';

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
  const { id } = useParams();

  const currentTrackId = Number(id);
  const currentTrack = playlist.find((track) => track.id === currentTrackId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !currentTrack) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div
      id="audio-player"
      className="flex h-full flex-col justify-center gap-y-space-y-xs"
    >
      <div id="track-description" className="mx-auto w-9/12 py-space-y-sm">
        <h3 className="text-center font-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, unde.
        </h3>
      </div>
      <div
        id="track-card"
        className="mx-auto flex w-9/12 flex-col items-center gap-y-space-y-xs py-space-y-xs"
      >
        <TrackDisplay currentTrack={currentTrack} />
        <Controllers />
        <VolumeBar />
      </div>
    </div>
  );
}
