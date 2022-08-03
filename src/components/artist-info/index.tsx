import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/store";

import { artistsSelector, fetchSingleArtist } from "../../store/modules/artist";
import ArtistInfoContentLoader from "./contentLoader";

const ArtistInfo = () => {
  const { artist, isLoading } = useAppSelector(artistsSelector);
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchSingleArtist(location.pathname.split("/artist/")[1]));
  }, [dispatch, location.pathname]);

  return (
    <>
      {isLoading ? (
        <ArtistInfoContentLoader />
      ) : (
        <Card className="bg-dark text-white flex-fill">
          <Card.Img
            className="overlay-image"
            src={artist.picture_big}
            alt="Card image"
          />
          <Card.ImgOverlay className="d-none d-lg-block">
            <Card.Title as={"h1"}>{artist.name}</Card.Title>
            <Card.Text className="mb-0">{artist.nb_fan} fans</Card.Text>
            <Card.Text>{artist.nb_album} albums</Card.Text>
          </Card.ImgOverlay>
        </Card>
      )}

      <div className="d-block d-lg-none">
        {isLoading ? (
          <ArtistInfoContentLoader />
        ) : (
          <>
            <Card.Title as={"h1"}>{artist.name}</Card.Title>
            <Card.Text className="mb-0">{artist.nb_fan} fans</Card.Text>
            <Card.Text>{artist.nb_album} albums</Card.Text>
          </>
        )}
      </div>
    </>
  );
};

export default ArtistInfo;
