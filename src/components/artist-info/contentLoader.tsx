import React from "react";
import ContentLoader from "react-content-loader";

const ArtistInfoContentLoader = () => {
  return (
    <ContentLoader
      backgroundColor="#f3f3f3"
      foregroundColor="#c4c4c4"
      viewBox="0 0 860 400"
      height={400}
      speed={2}
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="15" fill="red" />
      <rect x="0" y="0" rx="0" ry="0" width="860" height="400" />
    </ContentLoader>
  );
};

export default ArtistInfoContentLoader;
