import React, { useState, useRef, Ref, useEffect } from 'react';
import ReactPlayer from 'react-player';


export default function YoutubePlayer({
  youtubId
}: {
  youtubId:string,
}) {
  if (!youtubId) {
    return null; 
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
        height: "calc(56.25vw - 245.8125px)",
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
        url={`https://www.youtube.com/watch?v=${youtubId}`}
        controls={false}
        config={{
          youtube:{
            playerVars:{
              vq: "hd720",
              showInfo:"0",
              controls:"1",
              rel:"0",
              modestbranding:1
            }
          }
        }}
      />
    </div>
  );
}