import React from 'react';
import Player from './components/Player';
import { useState, useEffect } from 'react';
import music from './slices/musicslices';

export default function App() {

  const [songs, setSongs] = useState(music);

  let thisSong = songs[0].src
  console.log(thisSong)


  const [currentSongIndex, setCurrentSongIndex] = useState(27);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

  console.log(currentSongIndex)

  return (
    <div className='App'>

      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />

    </div>
  );
}
