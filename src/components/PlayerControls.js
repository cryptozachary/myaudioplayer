import Play from "../images2/play.png"
import Back from "../images2/back.png"
//mport Forward from "../images2/forward.png"
import Pause from "../images2/pausee.png"

export default function PlayerControls(props) {
    return (
        <div className="c-player--controls">
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



        </div>
    )
}
