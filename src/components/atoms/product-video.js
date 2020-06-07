import React from 'react';

function ProductVideo(props) {
    return (
        <div className="product-video">
            <iframe className="youtube-frame"
                src={`https://www.youtube.com/embed/${props.youtube_id}?autoplay=1&controls=0&loop=1&rel=0&playlist=${props.youtube_id}&modestbranding=1&showinfo=0`}
                frameborder="0" allowfullscreen></iframe>
        </div>
    );
}

export default ProductVideo;