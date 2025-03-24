import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description, url }) => {
  const defaultImage = "https://icasmet.com/images/icacsitArtboard%201ICAMET.png";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ICASMET Conference" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

export default MetaTags;