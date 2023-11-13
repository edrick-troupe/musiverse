import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Home from './views/Home/Home';
import Playlist from './views/Playlist/Playlist';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist">
          <Route index element={<Playlist />} />
          <Route path="track/:id" element={<AudioPlayer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
