import './TrackDisplay.scss';

import { PlaylistData } from '@customTypes/Playlist';

interface DiscProps {
  currentTrack: PlaylistData;
}

export default function TrackDisplay({ currentTrack }: DiscProps) {
  return (
    <div
      id="track-display"
      className="flex grow flex-col items-center justify-center gap-y-space-y-xs py-space-y-xs"
    >
      <div
        id="track-display__disc"
        className="mx-auto"
        style={{ backgroundImage: `url(${currentTrack.thumbnail})` }}
      />
      <div id="track-display__info" className="text-center">
        <h4 className="font-title font-bold">
          <strong>{currentTrack.title}</strong>
        </h4>
        <h5 className="">{currentTrack.artist}</h5>
      </div>
    </div>
  );
}
