import React from "react";
import PropTypes from "prop-types";
import { graphql, link } from "gatsby";

import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const ServicesPageTemplate = ({ title, description, services }) => (
  <section className="page-services">
    <header className="page-services__header">
      <h1 className="page-services__title">{title}</h1>

      <HTMLContent
        className="page-services__description"
        content={description}
      />
    </header>

    <div className="page-services__list">
      {services.map(({ title, description, slug }) => (
        <a
          className="page-services__item"
          href={`/services/${slug}`}
          key={slug}
        >
          <article>
            <h1 className="page-services__itemTitle">{title}</h1>
            <p className="page-services__itemDescription">{description}</p>
          </article>
        </a>
      ))}
    </div>
  </section>
);

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.object)
};

const ServicesPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        description={html}
        services={frontmatter.services}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    })
  })
};

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      html
      frontmatter {
        title
        services {
          title
          description
          slug
        }
      }
    }
  }
`;
