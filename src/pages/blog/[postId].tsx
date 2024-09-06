import React from 'react';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import SEO from '@/components/seo';
import { INFO } from '@/constants';
import Layout from '@/components/layout/Layout';
import {
  GET_BLOG_BY_ID,
  GET_BLOG_SLUGS,
  GET_RECENT_BLOG_POSTS,
} from '@/api/queries';
import BlogPost from '@/sections/blogPage/BlogPost';

interface BlogProps {
  post: {
    id: number;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    title: string;
    content: string;
    shortDescription: {
      shortDescription: string;
    };
    tags: {
      nodes: Array<{ name: string }>;
    };
    date: string;
  };
  otherPosts: Array<{
    id: number;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    title: string;
    content: string;
    shortDescription: {
      shortDescription: string;
    };
    date: string;
  }>;
}

export default function Blog({ post, otherPosts }: BlogProps): JSX.Element {
  const router = useRouter();
  return (
    <Layout>
      <SEO title={post.title || `Blog | ${INFO.companyName}`} />
      <ArticleJsonLd
        type="BlogPosting"
        url={`${INFO.site}/blog/${post.id}`}
        title={post?.title}
        images={[post?.featuredImage?.node?.sourceUrl]}
        datePublished={post?.date}
        dateModified={post?.date}
        authorName="Admin"
        description={post?.shortDescription?.shortDescription}
      />
      <BlogPost post={post} otherPosts={otherPosts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // async function getPostSlugs() {
  // const response = await fetch(process.env.NEXT_PUBLIC_API_URL || '', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: GET_BLOG_SLUGS,
  //   }),
  // });

  //   const { data } = await response.json();

  //   return data?.posts?.nodes?.map((node: any) => node.id) || [];
  // }

  // const slugs = await getPostSlugs();

  // const paths = slugs?.map((slug: number) => ({
  //   params: {
  //     postId: slug.toString(),
  //   },
  // }));
  const paths = '';
  return {
    paths,
    fallback: 'blocking',
  };
}

interface GetStaticPropsContext {
  params: {
    postId: string;
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<{}> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_BLOG_BY_ID,
        variables: {
          id: params?.postId,
        },
      }),
    });

    const response2 = await fetch(process.env.NEXT_PUBLIC_API_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_RECENT_BLOG_POSTS,
        variables: {
          id: params?.postId,
        },
      }),
    });

    const { data } = await response.json();
    const { data: postsData } = await response2.json();

    const post = data?.post;

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        otherPosts:
          postsData?.posts?.nodes?.filter(
            (item: any) => item?.id !== post?.id
          ) || [],
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error fetching post data:', error);
    return {
      notFound: true,
    };
  }
}
