import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from "./PlayerControls"
import { useEffect, useState, useRef } from 'react'


export default function Player(props) {

    const audioEl = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {

        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    const SkipSong = (forwards = true) => {

        props.setCurrentSongIndex(prev => {
            if (forwards) {
                let temp = prev;
                temp = temp + 1;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            }

            let temp = prev;
            temp = temp - 1;

            if (temp < 0) {
                temp = props.songs.length - 1;
            }
            return temp;

        })
    }




    return (
        <div className='c-player'>

            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl} ></audio>
            <h4 className='playing-now'>Playing Now</h4>

            <PlayerDetails
                song={props.songs[props.currentSongIndex]}
                isPlaying={isPlaying}
            />

            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
                audioEl={audioEl}
            />

            <p className="next-up">
                <strong>Next Up:</strong> {props.songs[props.nextSongIndex].title} by{' '}
                {props.songs[props.nextSongIndex].artist}{' '}
            </p>
        </div>
    );
}
