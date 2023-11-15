import './TrackDisplay.scss';

import { PlaylistData } from '@customTypes/Playlist';

interface DiscProps {
  currentTrack: PlaylistData;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function TrackDisplay({ currentTrack, audioRef }: DiscProps) {
  return (
    <div
      id="track-display"
      className="flex grow flex-col items-center justify-center gap-y-space-y-xs py-space-y-xs"
    >
      <audio src={currentTrack.src} ref={audioRef}>
        <track kind="captions" />
      </audio>
      <div
        id="track-display__disc"
        className="mx-auto"
        style={{ backgroundImage: `url(${currentTrack.thumbnail})` }}
      />
      <div id="track-display__info" className="text-center">
        <h4 className="font-title font-bold">
          <strong>{currentTrack.title}</strong>
        </h4>
        <h5>{currentTrack.artist}</h5>
      </div>
    </div>
  );
}
