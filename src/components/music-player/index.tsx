import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useAppSelector, useAppDispatch } from "../../hooks/store";

import { artistsSelector, playTrack } from "../../store/modules/artist";
const MusicPlayer = () => {
  const dispatch = useAppDispatch();
  const { currentTrack } = useAppSelector(artistsSelector);

  return currentTrack === "" ? (
    <></>
  ) : (
    <Container className="mt-4 d-flex flex-column">
      <Button
        className="bg-transparent ms-auto text-dark border-0"
        onClick={() => dispatch(playTrack(""))}
      >
        <FontAwesomeIcon icon={faXmark} />
      </Button>
      <iframe
        title="deezer-widget"
        src={`https://widget.deezer.com/widget/dark/track/${
          currentTrack.split("/track/")[1]
        }`}
        width="100%"
        height="300"
        frameBorder="0"
        allow="encrypted-media; clipboard-write"
      ></iframe>
    </Container>
  );
};

export default MusicPlayer;
