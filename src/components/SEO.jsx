import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://mayapower.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO component for per-page meta tags, Open Graph, and Twitter cards.
 * Use on every page for crawler-friendly, shareable URLs.
 */
const SEO = ({
  title,
  description,
  path = '',
  image = DEFAULT_IMAGE,
  noindex = false,
}) => {
  const canonical = path ? `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}` : SITE_URL;
  const fullTitle = title ? `${title} | Maya Power` : 'Maya Power - Solar Energy Solutions in Maharashtra';
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Maya Power" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
