import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Topbar from "../../components/topbar";

/** Util(s) */
import { ROUTE_URLS } from "../../routes/RouteUrls";

const NotFound = (): JSX.Element => (
  <Container
    className="d-flex flex-column px-0 vh-100"
    fluid
  >
    <Topbar />
    <Container className="flex-fill d-flex justify-content-center align-items-center">
      <div className="error-card">
        <h1 className="fs-1">404</h1>
        <p>
          Something went wrong. We can’t find the page you are looking for
        </p>
        <Link to={ROUTE_URLS.HOME_URL} className="btn btn-secondary mx-auto d-block">
          Go back
        </Link>
      </div>
    </Container>
  </Container>
);

export default NotFound;
