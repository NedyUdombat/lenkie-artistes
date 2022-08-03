import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/store";
import { ROUTE_URLS } from "../../routes/RouteUrls";

import { artistsSelector } from "../../store/modules/artist";
import ArtistsListsContentLoader from "./contentLoader";

const Lists = () => {
  const { artists, isLoading } = useAppSelector(artistsSelector);

  return (
    <Container className="py-3">
      {isLoading ? (
        <Container className=" d-flex justify-content-center flex-column align-items-center">
          <ArtistsListsContentLoader />
          <p>Retrieving data...</p>
        </Container>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {artists.map((item) => (
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.picture_big} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>

                  <Link to={`${ROUTE_URLS.ARTIST_DETAILS_URL}/${item.id}`}>
                    View artist profile
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Lists;
