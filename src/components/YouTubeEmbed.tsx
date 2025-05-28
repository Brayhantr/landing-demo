import React from 'react';

interface YouTubeEmbedProps {
  youtubeId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ youtubeId }) => {
  if (!youtubeId) return null;
  
  return (
    <div className="trailer-container mt-6 mb-8">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;