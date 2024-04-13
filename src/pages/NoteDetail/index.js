import React from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ReactPlayer from "react-player";
import "./index.css";

const VideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

const NoteDetail = () => {
  const { id } = useParams();
  const noteDetail = JSON.parse(
    localStorage.getItem("newUpdatedNoteList")
  ).find((note) => note.id === id);

  const renderVideoImg = () => {
    if (/\.(jpg|jpeg|png|gif)$/i.test(noteDetail.urlName)) {
      return <img alt={noteDetail.titleName} src={noteDetail.urlName} />;
    } else {
      return <VideoPlayer url={noteDetail.urlName} />;
    }
  };

  return (
    <div className="noteDetailContainer">
      <h1>{noteDetail.titleName}</h1>
      <p>{noteDetail.descriptionName}</p>
      {renderVideoImg()}
      <p>
        {formatDistanceToNow(new Date(noteDetail.date), { addSuffix: true })}
      </p>
    </div>
  );
};

export default NoteDetail;
