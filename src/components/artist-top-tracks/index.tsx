import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/store";

import {
  artistsSelector,
  fetchSingleArtistTopTracks,
  playTrack,
} from "../../store/modules/artist";
import ArtistTopTracksContentLoader from "./contentLoader";

const ArtistsTopTracks = () => {
  const { artistTopTracks, isLoading } = useAppSelector(artistsSelector);
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(
      fetchSingleArtistTopTracks(location.pathname.split("/artist/")[1])
    );
  }, [dispatch, location.pathname]);

  return isLoading ? (
    <ArtistTopTracksContentLoader />
  ) : (
    <ListGroup as="ol" numbered>
      {artistTopTracks.map((track) => (
        <ListGroup.Item
          key={track.id}
          // as="li"
          className="d-flex justify-content-between align-items-start py-3"
          action
          onClick={() => dispatch(playTrack(track.link))}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{track.title}</div>
          </div>
          <div>{track.duration}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ArtistsTopTracks;
