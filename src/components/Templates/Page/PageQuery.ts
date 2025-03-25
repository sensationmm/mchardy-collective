import gql from "graphql-tag";

export const PageQuery = gql`
  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content,
      title,
    ...on WithAcfHome {
      home {
        contact
        linkedin
        flexible {
          fieldGroupName
            ...on HomeFlexibleAgencyLayout {
              boxes: slide {
                icon {
                  node {
                    sourceUrl
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
              button: cta {
                url
                title
                target
              }
              content
            }
            ...on HomeFlexibleDisciplinesLayout {
              button: cta {
                target
                title
                url
              }
              items: content {
                image {
                  node {
                    sourceUrl
                  }
                }
                text: summary
                title
              }
              title: largeTitle
            }
            ...on HomeFlexibleTestimonialsLayout {
              title
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
