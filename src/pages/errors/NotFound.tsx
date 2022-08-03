import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

/** Util(s) */
import { ROUTE_URLS } from "../../routes/RouteUrls";

const NotFound = (): JSX.Element => (
  <Container className="bg-warning d-flex flex-column" fluid>
    <nav className="navbar">
      <Link className="navlink" to={ROUTE_URLS.HOME_URL}>
        Lenkie Music
      </Link>
    </nav>
    <Container className="main-section flex-1">
      <div className="error-card">
        <h1 className="title">404</h1>
        <p className="info">
          Something went wrong. We can’t find the page you are looking for
        </p>
        <Link to={ROUTE_URLS.HOME_URL} className="btn btn-green">
          Go back
        </Link>
      </div>
    </Container>
  </Container>
);

export default NotFound;
