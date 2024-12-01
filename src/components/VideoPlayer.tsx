import React from 'react';

interface VideoPlayerProps {
  url: string;
  type: 'local' | 'youtube';
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, type, className = "" }) => {
  if (type === 'youtube') {
    const videoId = url.split('v=')[1];
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      className={`w-full ${className}`}
      controls
      preload="metadata"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;