import gql from "graphql-tag";

export const PageQuery = gql`
  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content,
      title,
    ...on WithAcfHome {
      home {
        flexible {
          fieldGroupName
            ...on HomeFlexibleAgencyLayout {
              slide {
                icon {
                  node {
                    uri
                  }
                }
                intro
                title
                heroText
                mainText
                strapline
              }
            }
            ...on HomeFlexibleRevealTextLayout {
              cta {
                url
                title
                target
              }
              content
            }
            ...on HomeFlexibleDisciplinesLayout {
              cta {
                target
                title
                url
              }
              items: content {
                image {
                  node {
                    uri
                  }
                }
                text: summary
                title
              }
              title: largeTitle
            }
            ...on HomeFlexibleTestimonialsLayout {
              title
              intro: strapline
              items: testimonials {
                quote
                author
              }
            }
            ...on HomeFlexibleFullWidthTextLayout {
              buttons: ctas {
                cta {
                  url
                  title
                  target
                }
              }
              intro: content
              text: strapline
            }
          }
        }
      }
    }
  }
`;
