import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { print } from 'graphql/language/printer';

import { setSeoData } from '@/utils/seoData';

import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { ContentNode, Page } from '@/gql/graphql';
import { SeoQuery } from '@/queries/general/SeoQuery';
import { Landing } from '@/components/Landing';
import { IIntro, Intro } from '@/components/Intro';
import { Boxes, IBoxes } from '@/components/Boxes';
import { HoverContent, IHoverContent } from '@/components/HoverContent';

import * as Styled from './page.styles';
import { IScroller, Scroller } from '@/components/Scroller';
import { Contact, IContact } from '@/components/Contact';
import { PageQuery } from '@/components/Templates/Page/PageQuery';
import { Footer } from '@/components/Footer';

// type Props = {
//   params: { slug: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = nextSlugToWpSlug(params.slug);
//   const isPreview = slug.includes('preview');

//   const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(print(SeoQuery), {
//     slug: isPreview ? slug.split('preview/')[1] : slug,
//     idType: isPreview ? 'DATABASE_ID' : 'URI',
//   });

//   if (!contentNode) {
//     return notFound();
//   }

//   const metadata = setSeoData({ seo: contentNode.seo });

//   return {
//     ...metadata,
//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
//     },
//   } as Metadata;
// }

export function generateStaticParams() {
  return [];
}

export default async function HomePage(/*{ params }: Props*/) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: 43,
  });

  // console.log('page', page);

  if (!page) return notFound();

  return (
    <>
      <Landing contact={page?.home?.contact || ''} />

      <Styled.Main>
        {page.home?.flexible?.map((block) => {
          if (block?.fieldGroupName === 'HomeFlexibleRevealTextLayout') {
            const content = block as IIntro;
            return <Intro key={`page-block-${block?.fieldGroupName}`} {...content} />;
          } else if (block?.fieldGroupName === 'HomeFlexibleAgencyLayout') {
            const content = block as IBoxes;
            return <Boxes key={`page-block-${block?.fieldGroupName}`} {...content} />;
          } else if (block?.fieldGroupName === 'HomeFlexibleDisciplinesLayout') {
            const content = block as IHoverContent;
            return <HoverContent key={`page-block-${block?.fieldGroupName}`} {...content} />;
          } else if (block?.fieldGroupName === 'HomeFlexibleTestimonialsLayout') {
            const content = block as IScroller;
            return <Scroller key={`page-block-${block?.fieldGroupName}`} {...content} />;
          } else if (block?.fieldGroupName === 'HomeFlexibleFullWidthTextLayout') {
            const content = block as IContact;
            return <Contact key={`page-block-${block?.fieldGroupName}`} {...content} />;
          }
        })}
      </Styled.Main>

      <Footer contact={page?.home?.contact || ''} linkedin={page?.home?.linkedin || ''} />
    </>
  );
}
