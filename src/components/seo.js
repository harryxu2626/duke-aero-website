import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, titleTemplate }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    titleTemplate: titleTemplate || defaultTitleTemplate,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    keywords: keywords,
  };

  return (
    <Helmet
      defer={false}
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      htmlAttributes={{ lang: "en" }}
      meta={[
              {
                property: `og:title`,
                content: seo.title,
              },
              {
                property: `og:siteurl`,
                content: seo.url,
              },
              {
                name: `keywords`,
                content: seo.keywords,
              },
              {
                property: `og:description`,
                content: seo.description,
              },
              {
                name: `description`,
                content: seo.description,
              },
              {
                property: `og:type`,
                content: `website`,
              }
            ]}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        keywords: keywords
      }
    }
  }
`;
