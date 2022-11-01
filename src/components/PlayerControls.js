import Play from "../images2/play.png"
import Back from "../images2/back.png"
//mport Forward from "../images2/forward.png"
import Pause from "../images2/pausee.png"
import { useState, useRef, useEffect } from "react"

export default function PlayerControls(props) {

    const { audioEl } = props;

    const seek_slider = useRef(null)

    const curr_time = useRef(null)

    const total_duration = useRef(null)

    const [currTime, setCurrTime] = useState()

    const [totalDuration, setTotalDuration] = useState();


    const seekTo = () => {
        // Calculate the seek position by the
        // percentage of the seek slider 
        // and get the relative duration to the track

        let seekto = audioEl.current.duration * (seek_slider.current.value / 100);
        // Set the current track position to the calculated seek position
        audioEl.current.currentTime = seekto;
    }

    function seekUpdate() {

        let seekPosition = 0;

        // Check if the current track duration is a legible number
        if (!isNaN(audioEl.current.duration)) {
            seekPosition = audioEl.current.currentTime * (100 / audioEl.current.duration);
            seek_slider.current.value = seekPosition;

            // Calculate the time left and the total duration
            let currentMinutes = Math.floor(audioEl.current.currentTime / 60);
            let currentSeconds = Math.floor(audioEl.current.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(audioEl.current.duration / 60);
            let durationSeconds = Math.floor(audioEl.current.duration - durationMinutes * 60);

            // Add a zero to the single digit time values
            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

            // Display the updated duration
            curr_time.current.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.current.textContent = durationMinutes + ":" + durationSeconds;

        }
    }

    useEffect(() => {
        let updateTimer = setInterval(seekUpdate, 1000)

        return function () {
            clearInterval(updateTimer)
        }
    })

    //only updates the duration and current time when play is started or stopped 

    return (
        <><div className="slider_container">

            <div ref={curr_time} className="current-time">00:00</div>
            <input ref={seek_slider} type="range" min="1" max="100" defaultValue="0" className="seek_slider" onChange={() => [seekTo(), seekUpdate()]}></input>
            <div ref={total_duration} className="total-duration">00:00</div>

        </div><div className="c-player--controls">
                <button className="skip-btn btn" onClick={() => props.SkipSong(false)}>
                    <img className="left-img" src={Back} alt="back"></img>
                </button>

                <div className="c-player--controls">
                    <button className="play-btn btn " onClick={() => props.setIsPlaying(!props.isPlaying)}>
                        <img src={props.isPlaying ? Pause : Play} alt="play"></img>
                    </button>
                </div>

                <div className="c-player--controls">
                    <button className="skip-btn btn " onClick={() => props.SkipSong()}>
                        <img className="rotateImage right-img" src={Back} alt="forward"></img>
                    </button>
                </div>



            </div></>
    )
}
