import React from 'react';

interface ThumbnailProps {
  src: string;
  alt: string;
  style?: string;
}

export const Thumbnail = ({ src, alt, style }: ThumbnailProps) => {
  return <img className={style} src={src} alt={alt} />;
};
