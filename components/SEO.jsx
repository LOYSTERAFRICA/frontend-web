/**
 * This file should be imported into every page. It is for SEO
 */

import React from "react";
import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  );
};

SEO.defaultProps = {
  title: "Home",
  description:
    "Loyster allows you connect your bank accounts into a single applicatio",
  keywords: "Bank, Transfer, transaction ",
};

export default SEO;
