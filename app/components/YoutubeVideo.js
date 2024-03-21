import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  // YouTube video id
  const videoId = "ZzWaow1Rvho";

  // YouTube video options
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center m-8">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;
