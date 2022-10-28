import React from 'react';

export default function PlayerDetails(props) {
    return (
        <div className='c-player--details'>
            <div className='details-img'>
                <img className="song--img" src={props.song.img_src} alt='up' />
            </div>
            <h3 className='details-title'>{props.song.title}</h3>
            <h3 className='details-artist'>{props.song.artist}</h3>
        </div>
    );
}
