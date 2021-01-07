import { graphql } from 'gatsby';

export const pageImage = graphql`
  fragment pageImage on File {
    childImageSharp {
      fluid(maxWidth: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
