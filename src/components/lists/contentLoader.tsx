import React from "react";
import ContentLoader from "react-content-loader";

const ArtistsListsContentLoader = () => {
  return (
    <ContentLoader
      viewBox="0 0 400 120"
      height={120}
      width={400}
      backgroundColor="transparent"
    >
      <circle cx="150" cy="86" r="15" />
      <circle cx="194" cy="86" r="15" />
      <circle cx="238" cy="86" r="15" />
    </ContentLoader>
  );
};

export default ArtistsListsContentLoader;
