import { PlaylistData } from '@customTypes/Playlist';

interface PlaylistProps {
  playlist: PlaylistData[];
  isLoading: boolean;
  error: boolean;
}

export default function Playlist({
  playlist,
  isLoading,
  error,
}: PlaylistProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div id="playlist" className="">
      <h1>Playlist</h1>
    </div>
  );
}
