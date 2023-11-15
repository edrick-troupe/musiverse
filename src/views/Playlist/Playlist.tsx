import { Link } from 'react-router-dom';

import './Playlist.scss';

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
    <div
      id="playlist"
      className="flex h-full flex-col justify-center py-space-y-md"
    >
      <h3 className="mx-auto w-10/12 text-center font-subheadline">
        Sélectionnez une musique pour en écouter un extrait
      </h3>
      <div
        id="playlist__container"
        className="mx-auto mt-space-y-md flex w-10/12 flex-col justify-center"
      >
        <ul className="grid gap-x-space-x-sm gap-y-space-y-xs lg:grid-cols-2 lg:gap-y-space-y-xs xl:grid-cols-3 xl:gap-y-space-y-sm">
          {playlist.map((track) => (
            <li key={track.id}>
              <Link
                to={`/playlist/track/${track.id}`}
                className="px-space-x-xs py-space-y-xxs"
              >
                <div className="track flex h-full max-h-28 md:max-h-44">
                  <div className="track__album-cover w-2/5 shrink-0">
                    <img
                      src={track.thumbnail}
                      alt="Track cover"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="track__info px-3 pt-4">
                    <h4 className="font-title font-bold">
                      <strong>{track.title}</strong>
                    </h4>
                    <h5 className="">{track.artist}</h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
