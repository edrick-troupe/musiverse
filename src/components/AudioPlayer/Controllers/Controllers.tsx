import './Controllers.scss';

import { RiPlayFill, RiSkipBackFill, RiSkipForwardFill } from 'react-icons/ri';

export default function Controllers() {
  return (
    <div
      id="controllers"
      className="mx-auto mt-auto flex w-10/12 justify-between px-space-x-xs py-space-y-xxs"
    >
      {/* Previous Track */}
      <button type="button" className="controller-btn">
        <RiSkipBackFill />
      </button>
      {/* Play/Pause */}
      <button type="button" className="controller-btn">
        <RiPlayFill />
      </button>
      {/* Next Track */}
      <button type="button" className="controller-btn">
        <RiSkipForwardFill />
      </button>
    </div>
  );
}
