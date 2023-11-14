import './VolumeBar.scss';

import { RiVolumeDownFill } from 'react-icons/ri';

export default function VolumeBar() {
  return (
    <div id="volume-bar" className="mx-auto mt-space-y-xs">
      <div id="track-display__volume">
        <label
          htmlFor="track-display__volume"
          className="volume-bar flex items-center justify-center gap-x-4"
        >
          <button type="button" className="icon">
            <RiVolumeDownFill />
          </button>
          <input type="range" id="volume" name="volume" min="0" max="10" />
        </label>
      </div>
    </div>
  );
}
