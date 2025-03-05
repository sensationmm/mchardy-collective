import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { print } from 'graphql/language/printer';
import gql from 'graphql-tag';

import { setSeoData } from '@/utils/seoData';

import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { ContentInfoQuery } from '@/queries/general/ContentInfoQuery';
import { ContentNode, Page } from '@/gql/graphql';
import PageTemplate from '@/components/Templates/Page/PageTemplate';
import { nextSlugToWpSlug } from '@/utils/nextSlugToWpSlug';
import PostTemplate from '@/components/Templates/Post/PostTemplate';
import { SeoQuery } from '@/queries/general/SeoQuery';
import { Landing } from '@/components/Landing';
import { Intro } from '@/components/Intro';
import { Boxes } from '@/components/Boxes';
import { HoverContent } from '@/components/HoverContent';

import * as Styled from './page.styles';
import { Scroller } from '@/components/Scroller';
import { Contact } from '@/components/Contact';
import { PageQuery } from '@/components/Templates/Page/PageQuery';

type Props = {
  params: { slug: string };
};

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

export default async function HomePage({ params }: Props) {
  const slug = nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes('preview');

  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: 43,
  });

  console.log('page', page);

  // const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(print(ContentInfoQuery), {
  //   slug: isPreview ? slug.split('preview/')[1] : slug,
  //   idType: isPreview ? 'DATABASE_ID' : 'URI',
  // });

  // if (!contentNode) return notFound();

  // switch (contentNode.contentTypeName) {
  //   case "page":
  //     return <PageTemplate node={contentNode} />;
  //   case "post":
  //     return <PostTemplate node={contentNode} />;
  //   default:
  //     return <p>{contentNode.contentTypeName} not implemented</p>;
  // }

  return (
    <>
      <Landing />

      <Styled.Main>
        <Intro />

        <Boxes
          boxes={[
            {
              title: 'Agencies',
              intro: 'Are you an agency leader looking to grow and open up new business opportunities?',
              textMain: (
                <p>
                  We help agencies build sustainable pipelines and drive real growth by connecting them with like-minded
                  businesses.
                </p>
              ),
              textSub: (
                <>
                  <p>
                    Whether you’re a marketing chief, creative director, or part of the c-suite, we help you form
                    partnerships that bring mutual success.
                  </p>
                  <p>
                    From content and events to technology, branding, and audio, we connect businesses across the
                    creative industries.
                  </p>
                </>
              ),
              textFooter: (
                <p>
                  At The McHardy Collective, we value genuine human connections, thrive on connecting the dots, and open
                  doors to create new opportunities.
                </p>
              ),
            },
            {
              title: 'Brands',
              intro: 'Are you a brand looking to connect with the best creative talent around?',
              textMain: (
                <p>
                  We help brands, from start-ups to global giants, tackle business challenges by connecting genuine,
                  mutually beneficial partnerships.
                </p>
              ),
              textSub: (
                <>
                  <p>
                    Through one seamless partnership, you’ll access a curated network of top agencies across content,
                    events, technology, branding, and audio.{' '}
                  </p>
                  <p>
                    Every agency is hand-picked and proven, delivering cutting-edge, high-impact work with minimal risk
                    and immediate value.
                  </p>
                </>
              ),
              textFooter: (
                <p>
                  At The McHardy Collective, we work hand-in-hand with marketing leaders, creative directors, and
                  c-suite executives seeking trusted collaborators.
                </p>
              ),
            },
          ]}
        />

        <HoverContent
          title='disciplines'
          items={[
            {
              title: 'Creative Content',
              text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla.',
            },
            {
              title: 'Event Creatives',
              text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.',
            },
            {
              title: 'Event Technologists',
              text: 'Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.',
            },
            {
              title: 'Brand Creators',
              text: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
            },
            {
              title: 'Audio Content',
              text: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            },
          ]}
        />

        <Scroller
          title='Testimonials'
          intro='Nullam quis risus eget urna mollis ornare vel eu leo.'
          items={[
            {
              quote: 'richard was the match- maker we needed. His shortlist was so on point it was hard to decide',
              attribution: 'Auto Trader UK CMO - Alex Andlaw',
            },
            {
              quote: 'richard was the match- maker we needed. His shortlist was so on point it was hard to decide',
              attribution: 'Auto Trader UK CMO - Alex Andlaw',
            },
            {
              quote: 'richard was the match- maker we needed. His shortlist was so on point it was hard to decide',
              attribution: 'Auto Trader UK CMO - Alex Andlaw',
            },
            {
              quote: 'richard was the match- maker we needed. His shortlist was so on point it was hard to decide',
              attribution: 'Auto Trader UK CMO - Alex Andlaw',
            },
          ]}
        />

        <Contact
          intro={
            <>
              Let's connect and explore how <em>The McHardy Collective</em> can help you build lasting partnerships and
              drive growth.
            </>
          }
          text='Whether you’re looking to expand your network, explore new opportunities, or simply have a chat, I’d love to hear from you. Drop me a line, and let’s get the conversation started!'
        />
      </Styled.Main>
    </>
  );
}
