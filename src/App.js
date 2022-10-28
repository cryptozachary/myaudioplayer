import React from 'react';
import Player from './components/Player';
import { useState, useEffect } from 'react';

export default function App() {

  const [songs] = useState([
    {
      title: 'Dreamerr',
      artist: 'Zachary Lipscomb',
      img_src: "./images/dreamerr.jpg",
      src: "./music/dreamerr.mp3",
    },

    {
      title: 'Medicine',
      artist: 'Zachary Lipscomb',
      img_src: "./images/dreamerr.jpg",
      src: "./music/medicine.mp3",
    },
    {
      title: 'Rebel Life',
      artist: 'Zachary Lipscomb',
      img_src: './images/dreamerr.jpg',
      src: './music/rebel-life.mp3',
    },
    {
      title: 'Save the Day',
      artist: 'Zachary Lipscomb',
      img_src: './images/dreamerr.jpg',
      src: './music/save-the-day.mp3',
    },
    {
      title: 'Butterflies',
      artist: 'Zachary Lipscomb',
      img_src: './images/dreamerr.jpg',
      src: './music/butterflies.mp3',
    },
  ]);

  let thisSong = songs[0].src
  console.log(thisSong)


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
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
