import './TrackDisplay.scss';

import { PlaylistData } from '@customTypes/Playlist';

interface DiscProps {
  currentTrack: PlaylistData;
  audioRef: React.RefObject<HTMLAudioElement>;
  discRef: React.RefObject<HTMLDivElement>;
  isPlaying: boolean;
  progression: number | undefined;
  currentTrackDuration: number | undefined;
}

export default function TrackDisplay({
  currentTrack,
  audioRef,
  discRef,
  isPlaying,
  progression,
  currentTrackDuration,
}: DiscProps) {
  return (
    <div
      id="track-display"
      className="flex grow flex-col items-center justify-center gap-y-space-y-xs py-space-y-xs"
    >
      <audio src={currentTrack.src} ref={audioRef}>
        <track kind="captions" />
      </audio>
      <div
        ref={discRef}
        id="track-display__disc"
        className={`spinning mx-auto ${isPlaying ? '' : 'paused'}`}
        style={{ backgroundImage: `url(${currentTrack.thumbnail})` }}
      >
        <div
          id="track-display__disc-shadow"
          style={{
            WebkitMask: `radial-gradient(transparent calc(${
              70 - (progression! / currentTrackDuration!) * 70
            }%), #000 calc(${
              70 - (progression! / currentTrackDuration!) * 70
            }%))`,
            mask: `radial-gradient(transparent calc(${
              70 - (progression! / currentTrackDuration!) * 70
            }%), #000 calc(${
              70 - (progression! / currentTrackDuration!) * 70
            }%))`,
          }}
        />
      </div>
      <div id="track-display__info" className="text-center">
        <h4 className="font-title font-bold">
          <strong>{currentTrack.title}</strong>
        </h4>
        <h5>{currentTrack.artist}</h5>
      </div>
    </div>
  );
}
