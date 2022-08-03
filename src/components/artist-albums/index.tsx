import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useAppSelector, useAppDispatch } from "../../hooks/store";

import {
  artistsSelector,
  fetchSingleArtistAlbums,
} from "../../store/modules/artist";
import ArtistAlbumsContentLoader from "./contentLoader";

const ArtistAlbums = () => {
  const { artistAlbums, isLoading } = useAppSelector(artistsSelector);
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchSingleArtistAlbums(location.pathname.split("/artist/")[1]));
  }, [dispatch, location.pathname]);

  return isLoading ? (
    <ArtistAlbumsContentLoader />
  ) : (
    <Row xs={1} md={2} lg={3} className="g-4">
      {artistAlbums.map((album, idx) => (
        <Col key={album.id} className="d-flex">
          <Card className="album-card mb-5 align-items-stretch">
            <Card.Img variant="top" src={album.cover_big} />
            <Card.Body>
              <Card.Title>{album.title}</Card.Title>
              <Card.Text>Listeners: {album.fans}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Release date: {album.release_date}
              </small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ArtistAlbums;
