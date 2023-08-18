import { request, gql } from "graphql-request";
const graphQlApi =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cll8n30wh130b01uj90js9byw/master";
export const getPosts = async () => {
  const query = gql`
    query Blogs {
      blogs {
        cardDescription
        createdAt
        image {
          url
        }
        id
        name
        publishedAt
        slug
        updatedAt
        uploadedBy
      }
    }
  `;

  const result = await request(graphQlApi, query);

  return result;
};
export const getPostDetails = async (slug) => {
  const query = gql`
    query Blog($slug: String!) {
      blogs(where: { slug: $slug }) {
        cardDescription
        mainDescription {
          raw
        }
        createdAt
        image {
          url
        }
        id
        name
        publishedAt
        slug
        updatedAt
        uploadedBy
      }
    }
  `;

  const result = await request(graphQlApi, query, { slug });

  return result.blogs[0];
};
