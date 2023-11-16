import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import playlistData from './data/supplementaryPlaylistData';

import Home from './views/Home/Home';
import Playlist from './views/Playlist/Playlist';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import NotFound from './views/NotFound/NotFound';

import { TrackData } from './types/TrackData';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const tokenUri = 'https://accounts.spotify.com/api/token';
const tracksUri = 'https://api.spotify.com/v1/tracks?ids=';

const tracksIdList = [
  '4UOTmg9TBVTUibdKnPYzKt',
  '3GJszdk6pDqqHN1XZJla8Z',
  '6lQDD0b8SZn3pvb2p2epFU',
  '3JlWBPFE8wy4tUrOz6GWEE',
  '6VZB0ttlqGjpGMAcaomXh9',
  '0Q9mPFYe0ItFHZl1bTIQ4y',
];
const tracksId = tracksIdList.join(',');

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTracksData = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const tokenResponse = await fetch(tokenUri, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        });
        const { access_token: token } = await tokenResponse.json();

        const tracksResponse = await fetch(`${tracksUri}${tracksId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetchedData = await tracksResponse.json();

        const data = fetchedData.tracks.map((track: TrackData, i: number) => {
          return {
            id: i + 1,
            title: track.name,
            artist: track.artists[0].name,
            description: playlistData[i].description,
            src: track.preview_url,
            thumbnail: track.album.images[1].url,
            other: playlistData[i].other,
          };
        });
        setPlaylist(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTracksData();
  }, []);

  return (
    <div id="app" className="font-text">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist">
          <Route
            index
            element={
              <Playlist
                playlist={playlist}
                isLoading={isLoading}
                error={error}
              />
            }
          />
          <Route
            path="track/:id"
            element={
              <AudioPlayer
                playlist={playlist}
                isLoading={isLoading}
                error={error}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
