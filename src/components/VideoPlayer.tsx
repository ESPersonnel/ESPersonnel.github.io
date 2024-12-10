import React from 'react';

interface VideoPlayerProps {
  url: string;
  type: 'local' | 'youtube';
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, type, className = "" }) => {
  if (type === 'youtube') {
    // Handle both regular YouTube videos and Shorts
    const getYouTubeId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeId(url);
    if (!videoId) return null;

    return (
      <div className={`relative ${className}`}>
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