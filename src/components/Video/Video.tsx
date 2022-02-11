/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';

import Text from '../Text';
import Button from '../Button';
import AspectRatio from '../AspectRatio';

import StyledVideo from './Video.style';

export type VideoProps = {
  type?: 'file' | 'youtube' | 'vimeo';
  src?: string;
  caption?: string;
  id?: string;
  poster?: string;
};

const Video = ({ caption, src, id, poster, type }: VideoProps) => {
  const hasPoster = typeof poster !== 'undefined';
  const [playing, setPlaying] = useState(!hasPoster);

  return (
    <StyledVideo>
      {!playing && poster && (
        <div className="video__overlay">
          <AspectRatio ratio="16:9">
            <img src={poster} alt={caption} />
          </AspectRatio>

          <Button label="Play" icon="Play" iconPosition="only" onClick={() => setPlaying(true)} />
        </div>
      )}

      {playing && (
        <AspectRatio ratio="16:9">
          {type === 'file' && <video src={src} controls />}

          {type === 'youtube' && (
            <iframe
              className="video__iframe"
              title="Youtube Video"
              src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=${hasPoster ? 1 : 0}`}
              allowFullScreen
              frameBorder="0"
            />
          )}

          {type === 'vimeo' && (
            <iframe
              className="video__iframe"
              title="Vimeo Video"
              src={`https://player.vimeo.com/video/${id}?autoplay=${
                hasPoster ? 1 : 0
              }&title=0&byline=0&portrait=0`}
              allowFullScreen
              frameBorder="0"
            />
          )}
        </AspectRatio>
      )}

      {caption && <Text>{caption}</Text>}
    </StyledVideo>
  );
};

Video.defaultProps = {
  type: 'file',
  caption: undefined,
  poster: undefined,
  src: undefined,
  id: undefined
};

export default Video;
