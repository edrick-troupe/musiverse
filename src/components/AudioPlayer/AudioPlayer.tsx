import './AudioPlayer.scss';

import { PlaylistData } from '@customTypes/Playlist';

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
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div id="audio-player" className="">
      <h1>AudioPlayer</h1>
    </div>
  );
}
