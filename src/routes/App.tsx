import React from "react";
import { Routes, Route } from "react-router-dom";

/** Util(s) */
import { ROUTE_URLS } from "./RouteUrls";

/** Page(s) */
import Index from "../pages/Index";
import NotFound from "../pages/errors/NotFound";
import ArtistProfile from "../pages/ArtistProfile";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTE_URLS.HOME_URL} element={<Index />} />
      <Route
        path={`${ROUTE_URLS.ARTIST_DETAILS_URL}/:id`}
        element={<ArtistProfile />}
      />

      {/** Not found Page(s) */}
      <Route path={ROUTE_URLS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default App;
