import React, { useState } from 'react';
import { Play, Maximize2, X, ExternalLink, RefreshCw } from 'lucide-react';

/**
 * Utility to extract YouTube video ID from various URL formats or raw ID string.
 * Examples:
 * - https://youtu.be/R-bVcwDzems?si=w3Z-Slc4LqJnmnDF => R-bVcwDzems
 * - https://www.youtube.com/watch?v=R-bVcwDzems => R-bVcwDzems
 * - https://www.youtube.com/embed/R-bVcwDzems => R-bVcwDzems
 * - R-bVcwDzems => R-bVcwDzems
 */
export const extractYouTubeId = (urlOrId) => {
  if (!urlOrId) return 'R-bVcwDzems'; // Default fallback ID
  
  // Clean trimmed string
  const str = String(urlOrId).trim();
  
  // If it's already a clean 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  
  // Match youtube.com or youtu.be URLs
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = str.match(regExp);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return 'R-bVcwDzems';
};

/**
 * YouTube Thumbnail component with high-res fallback
 */
export const YouTubeThumbnail = ({
  videoUrl,
  alt = 'Video Thumbnail',
  className = '',
}) => {
  const videoId = extractYouTubeId(videoUrl);
  const [imgSrc, setImgSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  const handleError = () => {
    // Fallback to high quality default if maxres is unavailable
    if (imgSrc.includes('maxresdefault')) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    } else if (imgSrc.includes('hqdefault')) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
};

/**
 * YouTube Iframe Player Component
 * Embeds video cleanly on your website without redirecting to YouTube.
 */
export const YouTubeEmbedPlayer = ({
  videoUrl,
  title = 'Product Video Walkthrough',
  autoPlay = true,
  className = '',
}) => {
  const videoId = extractYouTubeId(videoUrl);
  
  // Construct clean YouTube embed parameters:
  // rel=0: limit related videos to channel
  // modestbranding=1: hide logo
  // playsinline=1: inline playback on iOS
  // enablejsapi=1: JS API support
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${
    autoPlay ? '1' : '0'
  }&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <div className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-800/80 ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0 rounded-2xl"
      />
    </div>
  );
};

/**
 * Big Screen Lightbox Modal for YouTube Video
 */
export const YouTubeVideoModal = ({
  video,
  onClose,
  activeLanguage = 'English',
  onLanguageChange,
  activeMode = '40s',
  onModeChange,
}) => {
  if (!video) return null;

  // Derive target video URL/ID
  const videoUrl = video.youtubeUrl || video.youtubeId || 'https://youtu.be/R-bVcwDzems';
  const videoId = extractYouTubeId(videoUrl);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="max-w-5xl w-full bg-slate-900 border-2 border-slate-700/80 rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl text-white relative flex flex-col max-h-[92vh]">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-900/90">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C82190] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-[#C82190] tracking-wider">
                HD VIDEO WALKTHROUGH • EMBEDDED PLAYER
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-extrabold text-white leading-tight">
              {video.title || 'CareCloudX Hospital ERP Demonstration'}
            </h3>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-800 hover:bg-[#C82190] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-all shrink-0 ml-4 border border-slate-700"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Video Body */}
        <div className="p-3 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          {/* YouTube Native Embedded Player */}
          <YouTubeEmbedPlayer
            videoUrl={videoUrl}
            title={video.title || 'Product Video'}
            autoPlay={true}
          />

          {/* Video Metadata */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                {video.badge || 'Official Demonstration Video'}
              </span>
              <p className="text-xs text-slate-300">
                {video.subtitle || 'Streaming directly in high definition from YouTube.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbedPlayer;
