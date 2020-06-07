import React from 'react';

function YoutubeEmbed(props) {
    return (
        <div className={props.class}>
            <iframe
                className={props.iframe_class}
                src={`https://www.youtube.com/embed/${props.youtube_id}?autoplay=1&controls=0&loop=1&rel=0&playlist=${props.youtube_id}&modestbranding=1&showinfo=0`}
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    );
}

export default YoutubeEmbed;