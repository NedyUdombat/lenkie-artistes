import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/store";

import { fetchArtists } from "../../store/modules/artist";
import { ROUTE_URLS } from "../../routes/RouteUrls";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchParam: "",
    },
  });

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  const handleSearch = (data: { searchParam: string | undefined }) => {
    dispatch(fetchArtists(data.searchParam));
    navigate(ROUTE_URLS.HOME_URL, { replace: true });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={ROUTE_URLS.HOME_URL}>Lenkie Artistes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Form className="d-flex my-sm-2">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  {...register("searchParam")}
                />

                <Button
                  variant="outline-success"
                  onClick={handleSubmit(handleSearch)}
                >
                  Search
                </Button>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
