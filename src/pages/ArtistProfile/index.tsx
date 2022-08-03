import React from "react";
import Container from "react-bootstrap/Container";
import Topbar from "../../components/topbar";

import "./style.css";

import ArtistAlbums from "../../components/artist-albums";
import ArtistsTopTracks from "../../components/artist-top-tracks";
import ArtistInfo from "../../components/artist-info";
import MusicPlayer from "../../components/music-player";

const ArtistProfile = () => {
  return (
    <Container className="px-0" fluid>
      <Topbar />
      <Container className="py-0 mt-4">
        <div className="artist-overview-card d-block d-lg-flex">
          <ArtistInfo />
          <div className="info-section ms-auto ms-0 ms-lg-4">
            <h5 className="title">Top Tracks</h5>
            <ArtistsTopTracks />
          </div>
        </div>
      </Container>

      <MusicPlayer />

      <Container className="py-3 mt-5 albums section">
        <h3 className="title">Albums</h3>
        <ArtistAlbums />
      </Container>
    </Container>
  );
};

export default ArtistProfile;
