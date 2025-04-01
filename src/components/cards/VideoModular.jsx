import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  position: relative;

  @media (max-width: 768px){
    height: max-content;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; 
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 20px;
`;

const Preview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat center center/cover;
  border-radius: 20px;
  cursor: pointer;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
`;

const VideoModular = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // URL do vídeo e da thumbnail
  const videoId = "n36BhgPLOrQ";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const previewImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Card>
      <VideoContainer>
        {isPlaying ? (
          <Iframe
            src={videoUrl}
            title="Conheça a HOUSEBOX Construções Modulares"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            <Preview image={previewImage} onClick={handlePlay} />
            <PlayButton onClick={handlePlay}>▶</PlayButton>
          </>
        )}
      </VideoContainer>
    </Card>
  );
};

export default VideoModular;
