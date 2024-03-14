"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function YoutubePlayer({
  playing,
  setPlaying,
}: {
  playing: any;
  setPlaying: any;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
       
      }}
    >
      <ReactPlayer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        width={"100%"}
        height={"100%"}
        url="https://www.youtube.com/watch?v=NR2NN0r1W6c"
        controls={false}
        playing={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
}